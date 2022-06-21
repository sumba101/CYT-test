import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { TotalStatController } from "../totalStat.controller";
import { TotalStatService } from "../totalStat.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  co2Saved: 42.42,
  createdAt: new Date(),
  ecoCoins: 42,
  id: "exampleId",
  kgsRecycle: 42.42,
  moneyEarned: 42.42,
  numberOfPickups: 42,
  treesSaved: 42.42,
  updatedAt: new Date(),
  waterSaved: 42.42,
};
const CREATE_RESULT = {
  co2Saved: 42.42,
  createdAt: new Date(),
  ecoCoins: 42,
  id: "exampleId",
  kgsRecycle: 42.42,
  moneyEarned: 42.42,
  numberOfPickups: 42,
  treesSaved: 42.42,
  updatedAt: new Date(),
  waterSaved: 42.42,
};
const FIND_MANY_RESULT = [
  {
    co2Saved: 42.42,
    createdAt: new Date(),
    ecoCoins: 42,
    id: "exampleId",
    kgsRecycle: 42.42,
    moneyEarned: 42.42,
    numberOfPickups: 42,
    treesSaved: 42.42,
    updatedAt: new Date(),
    waterSaved: 42.42,
  },
];
const FIND_ONE_RESULT = {
  co2Saved: 42.42,
  createdAt: new Date(),
  ecoCoins: 42,
  id: "exampleId",
  kgsRecycle: 42.42,
  moneyEarned: 42.42,
  numberOfPickups: 42,
  treesSaved: 42.42,
  updatedAt: new Date(),
  waterSaved: 42.42,
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("TotalStat", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TotalStatService,
          useValue: service,
        },
      ],
      controllers: [TotalStatController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /totalStats", async () => {
    await request(app.getHttpServer())
      .post("/totalStats")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /totalStats", async () => {
    await request(app.getHttpServer())
      .get("/totalStats")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /totalStats/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/totalStats"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /totalStats/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/totalStats"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});

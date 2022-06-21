import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TotalStatService } from "./totalStat.service";
import { TotalStatControllerBase } from "./base/totalStat.controller.base";

@swagger.ApiTags("totalStats")
@common.Controller("totalStats")
export class TotalStatController extends TotalStatControllerBase {
  constructor(
    protected readonly service: TotalStatService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

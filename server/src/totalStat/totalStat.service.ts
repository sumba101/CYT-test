import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TotalStatServiceBase } from "./base/totalStat.service.base";

@Injectable()
export class TotalStatService extends TotalStatServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

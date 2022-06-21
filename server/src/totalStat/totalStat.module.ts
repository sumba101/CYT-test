import { Module } from "@nestjs/common";
import { TotalStatModuleBase } from "./base/totalStat.module.base";
import { TotalStatService } from "./totalStat.service";
import { TotalStatController } from "./totalStat.controller";
import { TotalStatResolver } from "./totalStat.resolver";

@Module({
  imports: [TotalStatModuleBase],
  controllers: [TotalStatController],
  providers: [TotalStatService, TotalStatResolver],
  exports: [TotalStatService],
})
export class TotalStatModule {}

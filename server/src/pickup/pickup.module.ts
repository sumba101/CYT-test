import { Module } from "@nestjs/common";
import { PickupModuleBase } from "./base/pickup.module.base";
import { PickupService } from "./pickup.service";
import { PickupController } from "./pickup.controller";
import { PickupResolver } from "./pickup.resolver";

@Module({
  imports: [PickupModuleBase],
  controllers: [PickupController],
  providers: [PickupService, PickupResolver],
  exports: [PickupService],
})
export class PickupModule {}

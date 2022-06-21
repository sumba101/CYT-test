import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PickupService } from "./pickup.service";
import { PickupControllerBase } from "./base/pickup.controller.base";

@swagger.ApiTags("pickups")
@common.Controller("pickups")
export class PickupController extends PickupControllerBase {
  constructor(
    protected readonly service: PickupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

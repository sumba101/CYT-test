import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PickupResolverBase } from "./base/pickup.resolver.base";
import { Pickup } from "./base/Pickup";
import { PickupService } from "./pickup.service";

@graphql.Resolver(() => Pickup)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PickupResolver extends PickupResolverBase {
  constructor(
    protected readonly service: PickupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

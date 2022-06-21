import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { TotalStatResolverBase } from "./base/totalStat.resolver.base";
import { TotalStat } from "./base/TotalStat";
import { TotalStatService } from "./totalStat.service";

@graphql.Resolver(() => TotalStat)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TotalStatResolver extends TotalStatResolverBase {
  constructor(
    protected readonly service: TotalStatService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

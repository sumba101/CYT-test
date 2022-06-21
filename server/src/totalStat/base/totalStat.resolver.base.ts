/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateTotalStatArgs } from "./CreateTotalStatArgs";
import { UpdateTotalStatArgs } from "./UpdateTotalStatArgs";
import { DeleteTotalStatArgs } from "./DeleteTotalStatArgs";
import { TotalStatFindManyArgs } from "./TotalStatFindManyArgs";
import { TotalStatFindUniqueArgs } from "./TotalStatFindUniqueArgs";
import { TotalStat } from "./TotalStat";
import { User } from "../../user/base/User";
import { TotalStatService } from "../totalStat.service";

@graphql.Resolver(() => TotalStat)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TotalStatResolverBase {
  constructor(
    protected readonly service: TotalStatService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "TotalStat",
    action: "read",
    possession: "any",
  })
  async _totalStatsMeta(
    @graphql.Args() args: TotalStatFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [TotalStat])
  @nestAccessControl.UseRoles({
    resource: "TotalStat",
    action: "read",
    possession: "any",
  })
  async totalStats(
    @graphql.Args() args: TotalStatFindManyArgs
  ): Promise<TotalStat[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => TotalStat, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "TotalStat",
    action: "read",
    possession: "own",
  })
  async totalStat(
    @graphql.Args() args: TotalStatFindUniqueArgs
  ): Promise<TotalStat | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TotalStat)
  @nestAccessControl.UseRoles({
    resource: "TotalStat",
    action: "create",
    possession: "any",
  })
  async createTotalStat(
    @graphql.Args() args: CreateTotalStatArgs
  ): Promise<TotalStat> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        uuid: {
          connect: args.data.uuid,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TotalStat)
  @nestAccessControl.UseRoles({
    resource: "TotalStat",
    action: "update",
    possession: "any",
  })
  async updateTotalStat(
    @graphql.Args() args: UpdateTotalStatArgs
  ): Promise<TotalStat | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          uuid: {
            connect: args.data.uuid,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => TotalStat)
  @nestAccessControl.UseRoles({
    resource: "TotalStat",
    action: "delete",
    possession: "any",
  })
  async deleteTotalStat(
    @graphql.Args() args: DeleteTotalStatArgs
  ): Promise<TotalStat | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async uuid(@graphql.Parent() parent: TotalStat): Promise<User | null> {
    const result = await this.service.getUuid(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

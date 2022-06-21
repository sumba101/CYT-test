/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TotalStatService } from "../totalStat.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TotalStatCreateInput } from "./TotalStatCreateInput";
import { TotalStatWhereInput } from "./TotalStatWhereInput";
import { TotalStatWhereUniqueInput } from "./TotalStatWhereUniqueInput";
import { TotalStatFindManyArgs } from "./TotalStatFindManyArgs";
import { TotalStatUpdateInput } from "./TotalStatUpdateInput";
import { TotalStat } from "./TotalStat";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TotalStatControllerBase {
  constructor(
    protected readonly service: TotalStatService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "TotalStat",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TotalStat })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: TotalStatCreateInput): Promise<TotalStat> {
    return await this.service.create({
      data: {
        ...data,

        uuid: {
          connect: data.uuid,
        },
      },
      select: {
        co2Saved: true,
        createdAt: true,
        ecoCoins: true,
        id: true,
        kgsRecycle: true,
        moneyEarned: true,
        numberOfPickups: true,
        treesSaved: true,
        updatedAt: true,

        uuid: {
          select: {
            id: true,
          },
        },

        waterSaved: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "TotalStat",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [TotalStat] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(TotalStatFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<TotalStat[]> {
    const args = plainToClass(TotalStatFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        co2Saved: true,
        createdAt: true,
        ecoCoins: true,
        id: true,
        kgsRecycle: true,
        moneyEarned: true,
        numberOfPickups: true,
        treesSaved: true,
        updatedAt: true,

        uuid: {
          select: {
            id: true,
          },
        },

        waterSaved: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "TotalStat",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: TotalStat })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: TotalStatWhereUniqueInput
  ): Promise<TotalStat | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        co2Saved: true,
        createdAt: true,
        ecoCoins: true,
        id: true,
        kgsRecycle: true,
        moneyEarned: true,
        numberOfPickups: true,
        treesSaved: true,
        updatedAt: true,

        uuid: {
          select: {
            id: true,
          },
        },

        waterSaved: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "TotalStat",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: TotalStat })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: TotalStatWhereUniqueInput,
    @common.Body() data: TotalStatUpdateInput
  ): Promise<TotalStat | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          uuid: {
            connect: data.uuid,
          },
        },
        select: {
          co2Saved: true,
          createdAt: true,
          ecoCoins: true,
          id: true,
          kgsRecycle: true,
          moneyEarned: true,
          numberOfPickups: true,
          treesSaved: true,
          updatedAt: true,

          uuid: {
            select: {
              id: true,
            },
          },

          waterSaved: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "TotalStat",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: TotalStat })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: TotalStatWhereUniqueInput
  ): Promise<TotalStat | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          co2Saved: true,
          createdAt: true,
          ecoCoins: true,
          id: true,
          kgsRecycle: true,
          moneyEarned: true,
          numberOfPickups: true,
          treesSaved: true,
          updatedAt: true,

          uuid: {
            select: {
              id: true,
            },
          },

          waterSaved: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}

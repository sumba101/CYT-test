import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PickupServiceBase } from "./base/pickup.service.base";

@Injectable()
export class PickupService extends PickupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

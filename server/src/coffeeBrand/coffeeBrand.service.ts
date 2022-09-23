import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CoffeeBrandServiceBase } from "./base/coffeeBrand.service.base";

@Injectable()
export class CoffeeBrandService extends CoffeeBrandServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

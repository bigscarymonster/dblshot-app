import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { BlendServiceBase } from "./base/blend.service.base";

@Injectable()
export class BlendService extends BlendServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

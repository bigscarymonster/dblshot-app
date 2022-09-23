import { Module } from "@nestjs/common";
import { BlendModuleBase } from "./base/blend.module.base";
import { BlendService } from "./blend.service";
import { BlendController } from "./blend.controller";
import { BlendResolver } from "./blend.resolver";

@Module({
  imports: [BlendModuleBase],
  controllers: [BlendController],
  providers: [BlendService, BlendResolver],
  exports: [BlendService],
})
export class BlendModule {}

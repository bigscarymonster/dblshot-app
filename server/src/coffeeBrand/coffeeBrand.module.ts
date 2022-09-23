import { Module } from "@nestjs/common";
import { CoffeeBrandModuleBase } from "./base/coffeeBrand.module.base";
import { CoffeeBrandService } from "./coffeeBrand.service";
import { CoffeeBrandController } from "./coffeeBrand.controller";
import { CoffeeBrandResolver } from "./coffeeBrand.resolver";

@Module({
  imports: [CoffeeBrandModuleBase],
  controllers: [CoffeeBrandController],
  providers: [CoffeeBrandService, CoffeeBrandResolver],
  exports: [CoffeeBrandService],
})
export class CoffeeBrandModule {}

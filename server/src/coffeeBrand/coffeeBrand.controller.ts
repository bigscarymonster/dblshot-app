import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CoffeeBrandService } from "./coffeeBrand.service";
import { CoffeeBrandControllerBase } from "./base/coffeeBrand.controller.base";

@swagger.ApiTags("coffeeBrands")
@common.Controller("coffeeBrands")
export class CoffeeBrandController extends CoffeeBrandControllerBase {
  constructor(
    protected readonly service: CoffeeBrandService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

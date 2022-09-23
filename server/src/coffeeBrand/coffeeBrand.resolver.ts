import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CoffeeBrandResolverBase } from "./base/coffeeBrand.resolver.base";
import { CoffeeBrand } from "./base/CoffeeBrand";
import { CoffeeBrandService } from "./coffeeBrand.service";

@graphql.Resolver(() => CoffeeBrand)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CoffeeBrandResolver extends CoffeeBrandResolverBase {
  constructor(
    protected readonly service: CoffeeBrandService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

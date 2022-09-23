import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BlendService } from "./blend.service";
import { BlendControllerBase } from "./base/blend.controller.base";

@swagger.ApiTags("blends")
@common.Controller("blends")
export class BlendController extends BlendControllerBase {
  constructor(
    protected readonly service: BlendService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

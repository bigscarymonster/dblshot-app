/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CoffeeBrandCreateNestedManyWithoutUsersInput } from "./CoffeeBrandCreateNestedManyWithoutUsersInput";
import { ValidateNested, IsOptional, IsString, IsJSON } from "class-validator";
import { Type } from "class-transformer";
import { GraphQLJSONObject } from "graphql-type-json";
import { InputJsonValue } from "../../types";
@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: () => CoffeeBrandCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CoffeeBrandCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CoffeeBrandCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  coffeeBrands?: CoffeeBrandCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: true,
  })
  @IsJSON()
  @Field(() => GraphQLJSONObject)
  roles!: InputJsonValue;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}
export { UserCreateInput };

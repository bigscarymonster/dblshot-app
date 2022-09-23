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
import { CoffeeBrandWhereInput } from "./CoffeeBrandWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CoffeeBrandListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CoffeeBrandWhereInput,
  })
  @ValidateNested()
  @Type(() => CoffeeBrandWhereInput)
  @IsOptional()
  @Field(() => CoffeeBrandWhereInput, {
    nullable: true,
  })
  every?: CoffeeBrandWhereInput;

  @ApiProperty({
    required: false,
    type: () => CoffeeBrandWhereInput,
  })
  @ValidateNested()
  @Type(() => CoffeeBrandWhereInput)
  @IsOptional()
  @Field(() => CoffeeBrandWhereInput, {
    nullable: true,
  })
  some?: CoffeeBrandWhereInput;

  @ApiProperty({
    required: false,
    type: () => CoffeeBrandWhereInput,
  })
  @ValidateNested()
  @Type(() => CoffeeBrandWhereInput)
  @IsOptional()
  @Field(() => CoffeeBrandWhereInput, {
    nullable: true,
  })
  none?: CoffeeBrandWhereInput;
}
export { CoffeeBrandListRelationFilter };

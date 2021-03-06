/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PickupWhereInput } from "./PickupWhereInput";
import { Type } from "class-transformer";
import { PickupOrderByInput } from "./PickupOrderByInput";

@ArgsType()
class PickupFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PickupWhereInput,
  })
  @Field(() => PickupWhereInput, { nullable: true })
  @Type(() => PickupWhereInput)
  where?: PickupWhereInput;

  @ApiProperty({
    required: false,
    type: [PickupOrderByInput],
  })
  @Field(() => [PickupOrderByInput], { nullable: true })
  @Type(() => PickupOrderByInput)
  orderBy?: Array<PickupOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PickupFindManyArgs };

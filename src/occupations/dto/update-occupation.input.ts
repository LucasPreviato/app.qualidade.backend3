import { CreateOccupationInput } from './create-occupation.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOccupationInput extends PartialType(CreateOccupationInput) {
  @Field(() => Int)
  id: number;
}

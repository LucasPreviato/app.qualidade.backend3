import { CreateJobcategoryInput } from './create-jobcategory.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateJobcategoryInput extends PartialType(CreateJobcategoryInput) {
  @Field(() => Int)
  id: number;
}

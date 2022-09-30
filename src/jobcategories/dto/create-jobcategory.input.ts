import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateJobcategoryInput {
  @Field()
  name: string
}

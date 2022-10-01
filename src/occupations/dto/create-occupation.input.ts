import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateOccupationInput {
  @Field()
  name: string

  @Field(() => Int)
  jobCategoryId: number

  @Field()
  alterations: string
}

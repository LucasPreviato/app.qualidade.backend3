import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class Occupation {
  @Field(() => Int)
  id: number

  @Field()
  name: string

  @Field(() => Int)
  version: number

  @Field(() => Date)
  revisionAt: Date

  @Field()
  alterations: string
}

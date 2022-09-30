import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class Department {
  @Field(() => Int)
  id: number

  @Field()
  initials: string

  @Field()
  name: string

  @Field({ nullable: true })
  email?: string

  @Field({ nullable: true })
  phone?: string
}

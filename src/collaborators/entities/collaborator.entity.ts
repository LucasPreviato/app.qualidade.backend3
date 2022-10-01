import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql'
import { Bond, Status } from '@prisma/client'

registerEnumType(Bond, {
  name: 'Bond',
})

registerEnumType(Status, {
  name: 'Status',
})

@ObjectType()
export class Collaborator {
  @Field(() => Int)
  id: number

  @Field(() => Date, { nullable: true })
  admissionAt?: Date

  @Field()
  name: string

  @Field()
  email: string

  @Field(() => Bond, { nullable: true, defaultValue: Bond.CLT })
  bond?: Bond

  @Field(() => Status, { nullable: true, defaultValue: Status.ACTIVE })
  status?: Status

  @Field({ nullable: true })
  tasks?: string

  @Field({ nullable: true })
  personalpresentation?: string

  @Field({ nullable: true })
  fiveYears?: string

  @Field({ nullable: true })
  pros?: string

  @Field({ nullable: true })
  cons?: string

  @Field({ nullable: true })
  obsGeneral?: string
}

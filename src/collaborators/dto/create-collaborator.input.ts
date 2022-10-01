import { InputType, Int, Field } from '@nestjs/graphql'
import { Bond, Status } from '@prisma/client'

@InputType()
export class CreateCollaboratorInput {
  @Field(() => Date, { nullable: true })
  admissionAt?: Date

  @Field()
  name: string

  @Field()
  email: string

  @Field(() => Bond, { nullable: true })
  bond?: Bond

  @Field(() => Status, { nullable: true })
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

  @Field(() => Int)
  unitId: number

  @Field(() => Int)
  departmentId: number

  @Field(() => Int)
  occupationId: number
}

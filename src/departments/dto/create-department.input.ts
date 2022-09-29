import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateDepartmentInput {
  @Field(() => Int)
  unitId: number

  @Field()
  initials: string

  @Field()
  name: string

  @Field({ nullable: true })
  email?: string

  @Field({ nullable: true })
  phone?: string
}

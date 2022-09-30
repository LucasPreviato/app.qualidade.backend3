import { InputType, Field } from '@nestjs/graphql'
import { CreateAddressInput } from 'src/addresses/dto/create-address.input'
import { CreateDepartmentInput } from 'src/departments/dto/create-department.input'

@InputType()
export class CreateUnitInput {
  @Field()
  name: string

  @Field({ nullable: true })
  email?: string

  @Field({ nullable: true })
  phone?: string

  @Field(() => CreateAddressInput, { nullable: true })
  address?: CreateAddressInput
}

import { InputType, Field } from '@nestjs/graphql'
import { CreateAddressInput } from 'src/address/dto/create-address.input'

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

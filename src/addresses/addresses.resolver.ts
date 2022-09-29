import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { AddressesService } from './addresses.service'
import { Address } from './entities/address.entity'
import { UpdateAddressInput } from './dto/update-address.input'

@Resolver(() => Address)
export class AddressesResolver {
  constructor(private readonly addressesService: AddressesService) {}

  @Query(() => [Address], { name: 'addresses' })
  findAll() {
    return this.addressesService.findAll()
  }

  @Query(() => Address, { name: 'address' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.addressesService.findOne(id)
  }

  @Mutation(() => Address)
  updateAddress(
    @Args('updateAddressInput') updateAddressInput: UpdateAddressInput,
  ) {
    return this.addressesService.update(
      updateAddressInput.id,
      updateAddressInput,
    )
  }

  @Mutation(() => Address)
  removeAddress(@Args('id', { type: () => Int }) id: number) {
    return this.addressesService.remove(id)
  }
}

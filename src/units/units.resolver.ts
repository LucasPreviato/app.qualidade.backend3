import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { UnitsService } from './units.service'
import { Unit } from './entities/unit.entity'
import { CreateUnitInput } from './dto/create-unit.input'
import { UpdateUnitInput } from './dto/update-unit.input'
import { Address } from 'src/addresses/entities/address.entity'
import { AddressesService } from 'src/addresses/addresses.service'
import { Department } from 'src/departments/entities/department.entity'
import { DepartmentsService } from 'src/departments/departments.service'

@Resolver(() => Unit)
export class UnitsResolver {
  constructor(
    private readonly unitsService: UnitsService,
    private readonly addressesService: AddressesService,
    private readonly departmentsService: DepartmentsService,
  ) {}

  @Mutation(() => Unit)
  createUnit(@Args('createUnitInput') createUnitInput: CreateUnitInput) {
    return this.unitsService.create(createUnitInput)
  }

  @Query(() => [Unit], { name: 'units' })
  findAll() {
    return this.unitsService.findAll()
  }

  @ResolveField(() => [Department])
  departments() {
    return this.unitsService.findAll()
  }

  @ResolveField(() => Address)
  unitAddress(@Parent() unit: Unit) {
    const { id } = unit

    return this.addressesService.findOne(id)
  }

  @Query(() => Unit, { name: 'unit' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.unitsService.findOne(id)
  }

  @Mutation(() => Unit)
  updateUnit(@Args('updateUnitInput') updateUnitInput: UpdateUnitInput) {
    return this.unitsService.update(updateUnitInput.id, updateUnitInput)
  }

  @Mutation(() => Unit)
  removeUnit(@Args('id', { type: () => Int }) id: number) {
    return this.unitsService.remove(id)
  }
}

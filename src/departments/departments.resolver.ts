import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { DepartmentsService } from './departments.service'
import { Department } from './entities/department.entity'
import { CreateDepartmentInput } from './dto/create-department.input'
import { UpdateDepartmentInput } from './dto/update-department.input'
import { Unit } from 'src/units/entities/unit.entity'
import { UnitsService } from 'src/units/units.service'

@Resolver(() => Department)
export class DepartmentsResolver {
  constructor(
    private readonly departmentsService: DepartmentsService,
    private readonly unitsService: UnitsService,
  ) {}

  @Mutation(() => Department)
  createDepartment(
    @Args('createDepartmentInput') createDepartmentInput: CreateDepartmentInput,
  ) {
    return this.departmentsService.create(createDepartmentInput)
  }

  @Query(() => [Department], { name: 'departments' })
  findAll() {
    return this.departmentsService.findAll()
  }

  @ResolveField(() => Int)
  unitId(departments: Department) {
    const { id } = departments

    return this.unitsService.findOne(id)
  }

  @Query(() => Department, { name: 'department' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.departmentsService.findOne(id)
  }

  @Mutation(() => Department)
  updateUnit(
    @Args('updateUnitInput') updateDepartmentInput: UpdateDepartmentInput,
  ) {
    return this.departmentsService.update(
      updateDepartmentInput.id,
      updateDepartmentInput,
    )
  }

  @Mutation(() => Department)
  removeDepartment(@Args('id', { type: () => Int }) id: number) {
    return this.departmentsService.remove(id)
  }
}

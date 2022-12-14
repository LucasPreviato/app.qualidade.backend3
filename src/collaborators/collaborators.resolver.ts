import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { CollaboratorsService } from './collaborators.service'
import { Collaborator } from './entities/collaborator.entity'
import { CreateCollaboratorInput } from './dto/create-collaborator.input'
import { UpdateCollaboratorInput } from './dto/update-collaborator.input'
import { Department } from 'src/departments/entities/department.entity'
import { DepartmentsService } from 'src/departments/departments.service'
import { UnitsService } from 'src/units/units.service'
import { Unit } from 'src/units/entities/unit.entity'
import { Occupation } from 'src/occupations/entities/occupation.entity'
import { OccupationsService } from 'src/occupations/occupations.service'

@Resolver(() => Collaborator)
export class CollaboratorsResolver {
  constructor(
    private readonly collaboratorsService: CollaboratorsService,
    private readonly departmentsService: DepartmentsService,
    private readonly unitsService: UnitsService,
    private readonly occupationsService: OccupationsService,
  ) {}

  @Mutation(() => Collaborator)
  createCollaborator(
    @Args('createCollaboratorInput')
    createCollaboratorInput: CreateCollaboratorInput,
  ) {
    return this.collaboratorsService.create(createCollaboratorInput)
  }

  @Query(() => [Collaborator], { name: 'collaborators' })
  findAll() {
    return this.collaboratorsService.findAll()
  }

  @Query(() => Collaborator, { name: 'collaborator' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.collaboratorsService.findOne(id)
  }

  @Mutation(() => Collaborator)
  updateCollaborator(
    @Args('updateCollaboratorInput')
    updateCollaboratorInput: UpdateCollaboratorInput,
  ) {
    return this.collaboratorsService.update(
      updateCollaboratorInput.id,
      updateCollaboratorInput,
    )
  }

  @Mutation(() => Collaborator)
  removeCollaborator(@Args('id', { type: () => Int }) id: number) {
    return this.collaboratorsService.remove(id)
  }

  @ResolveField(() => Department)
  department(@Parent() collaborator: Collaborator) {
    const { id } = collaborator

    return this.departmentsService.findOne(id)
  }

  @ResolveField(() => Unit)
  unit(@Parent() collaborator: Collaborator) {
    const { id } = collaborator

    return this.unitsService.findOne(id)
  }

  @ResolveField(() => Occupation)
  occupation(@Parent() collaborator: Collaborator) {
    const { id } = collaborator

    return this.occupationsService.findOne(id)
  }
}

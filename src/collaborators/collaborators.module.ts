import { Module } from '@nestjs/common'
import { CollaboratorsService } from './collaborators.service'
import { CollaboratorsResolver } from './collaborators.resolver'
import { DepartmentsService } from 'src/departments/departments.service'
import { UnitsService } from 'src/units/units.service'
import { OccupationsService } from 'src/occupations/occupations.service'

@Module({
  providers: [
    CollaboratorsResolver,
    CollaboratorsService,
    DepartmentsService,
    UnitsService,
    OccupationsService,
  ],
})
export class CollaboratorsModule {}

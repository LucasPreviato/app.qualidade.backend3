import { Module } from '@nestjs/common'
import { UnitsService } from './units.service'
import { UnitsResolver } from './units.resolver'
import { AddressesService } from 'src/addresses/addresses.service'
import { DepartmentsService } from 'src/departments/departments.service'

@Module({
  providers: [
    UnitsResolver,
    UnitsService,
    AddressesService,
    DepartmentsService,
  ],
})
export class UnitsModule {}

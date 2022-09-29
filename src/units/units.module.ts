import { Module } from '@nestjs/common'
import { UnitsService } from './units.service'
import { UnitsResolver } from './units.resolver'
import { AddressesService } from 'src/addresses/addresses.service'

@Module({
  providers: [UnitsResolver, UnitsService, AddressesService],
})
export class UnitsModule {}

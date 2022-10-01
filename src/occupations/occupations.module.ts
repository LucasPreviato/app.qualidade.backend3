import { Module } from '@nestjs/common'
import { OccupationsService } from './occupations.service'
import { OccupationsResolver } from './occupations.resolver'
import { JobcategoriesService } from 'src/jobcategories/jobcategories.service'

@Module({
  providers: [OccupationsResolver, OccupationsService, JobcategoriesService],
})
export class OccupationsModule {}

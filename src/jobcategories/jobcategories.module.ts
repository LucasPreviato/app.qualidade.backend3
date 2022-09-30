import { Module } from '@nestjs/common';
import { JobcategoriesService } from './jobcategories.service';
import { JobcategoriesResolver } from './jobcategories.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [JobcategoriesResolver, JobcategoriesService,PrismaService]
})
export class JobcategoriesModule {}

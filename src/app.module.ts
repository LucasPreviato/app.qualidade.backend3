import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'
import { join } from 'path'
import { AppService } from './app.service'
import { PrismaModule } from './prisma/prisma.module'
import { UnitsModule } from './units/units.module';
import { AddressesModule } from './addresses/addresses.module';
import { DepartmentsModule } from './departments/departments.module';
import { JobcategoriesModule } from './jobcategories/jobcategories.module';
import { CollaboratorsModule } from './collaborators/collaborators.module';
import { OccupationsModule } from './occupations/occupations.module';
import { UsersModule } from './users/users.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      autoSchemaFile: join(process.cwd(), 'src/types/schema.gql'),
      sortSchema: true,
    }),
    PrismaModule,
    UnitsModule,
    AddressesModule,
    DepartmentsModule,
    JobcategoriesModule,
    CollaboratorsModule,
    OccupationsModule,
    UsersModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}

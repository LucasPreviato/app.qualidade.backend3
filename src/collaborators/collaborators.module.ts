import { Module } from '@nestjs/common';
import { CollaboratorsService } from './collaborators.service';
import { CollaboratorsResolver } from './collaborators.resolver';

@Module({
  providers: [CollaboratorsResolver, CollaboratorsService]
})
export class CollaboratorsModule {}

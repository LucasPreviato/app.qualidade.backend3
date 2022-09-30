import { Test, TestingModule } from '@nestjs/testing';
import { CollaboratorsResolver } from './collaborators.resolver';
import { CollaboratorsService } from './collaborators.service';

describe('CollaboratorsResolver', () => {
  let resolver: CollaboratorsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollaboratorsResolver, CollaboratorsService],
    }).compile();

    resolver = module.get<CollaboratorsResolver>(CollaboratorsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

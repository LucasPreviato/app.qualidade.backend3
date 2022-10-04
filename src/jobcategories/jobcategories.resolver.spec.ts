import { Test, TestingModule } from '@nestjs/testing';
import { JobcategoriesResolver } from './jobcategories.resolver';
import { JobcategoriesService } from './jobcategories.service';

describe('JobcategoriesResolver', () => {
  let resolver: JobcategoriesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobcategoriesResolver, JobcategoriesService],
    }).compile();

    resolver = module.get<JobcategoriesResolver>(JobcategoriesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

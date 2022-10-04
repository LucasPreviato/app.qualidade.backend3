import { Test, TestingModule } from '@nestjs/testing';
import { JobcategoriesService } from './jobcategories.service';

describe('JobcategoriesService', () => {
  let service: JobcategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobcategoriesService],
    }).compile();

    service = module.get<JobcategoriesService>(JobcategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

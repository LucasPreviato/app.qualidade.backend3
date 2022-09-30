import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { JobcategoriesService } from './jobcategories.service';
import { Jobcategory } from './entities/jobcategory.entity';
import { CreateJobcategoryInput } from './dto/create-jobcategory.input';
import { UpdateJobcategoryInput } from './dto/update-jobcategory.input';

@Resolver(() => Jobcategory)
export class JobcategoriesResolver {
  constructor(private readonly jobcategoriesService: JobcategoriesService) {}

  @Mutation(() => Jobcategory)
  createJobcategory(@Args('createJobcategoryInput') createJobcategoryInput: CreateJobcategoryInput) {
    return this.jobcategoriesService.create(createJobcategoryInput);
  }

  @Query(() => [Jobcategory], { name: 'jobcategories' })
  findAll() {
    return this.jobcategoriesService.findAll();
  }

  @Query(() => Jobcategory, { name: 'jobcategory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.jobcategoriesService.findOne(id);
  }

  @Mutation(() => Jobcategory)
  updateJobcategory(@Args('updateJobcategoryInput') updateJobcategoryInput: UpdateJobcategoryInput) {
    return this.jobcategoriesService.update(updateJobcategoryInput.id, updateJobcategoryInput);
  }

  @Mutation(() => Jobcategory)
  removeJobcategory(@Args('id', { type: () => Int }) id: number) {
    return this.jobcategoriesService.remove(id);
  }
}

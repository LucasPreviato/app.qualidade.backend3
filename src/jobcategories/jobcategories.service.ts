import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateJobcategoryInput } from './dto/create-jobcategory.input';
import { UpdateJobcategoryInput } from './dto/update-jobcategory.input';

@Injectable()
export class JobcategoriesService {
  constructor(private prisma : PrismaService){}
  create(createJobcategoryInput: CreateJobcategoryInput) {
    return this.prisma.jobCategory.create({data:{...createJobcategoryInput}});
  }

  findAll() {
    return this.prisma.jobCategory.findMany();
  }

  findOne(id: number) {
    return this.prisma.jobCategory.findUnique({where:{id}});
  }

  update(id: number, updateJobcategoryInput: UpdateJobcategoryInput) {
    return this.prisma.jobCategory.update({
      where :{id},
      data :{
        ...updateJobcategoryInput
      }
    });
  }

  remove(id: number) {
    return this.prisma.jobCategory.delete({where:{id}});
  }
}

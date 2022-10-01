import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateOccupationInput } from './dto/create-occupation.input'
import { UpdateOccupationInput } from './dto/update-occupation.input'

@Injectable()
export class OccupationsService {
  constructor(private prisma: PrismaService) {}

  create({ alterations, jobCategoryId, name }: CreateOccupationInput) {
    return this.prisma.occupation.create({
      data: {
        name,
        alterations,
        jobcategory: {
          connect: {
            id: jobCategoryId,
          },
        },
      },
    })
  }

  findAll() {
    return this.prisma.occupation.findMany()
  }

  findOne(id: number) {
    return this.prisma.occupation.findUnique({
      where: { id },
    })
  }

  update(id: number, updateOccupationInput: UpdateOccupationInput) {
    return `This action updates a #${id} occupation`
  }

  remove(id: number) {
    return `This action removes a #${id} occupation`
  }
}

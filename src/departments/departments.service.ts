import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateDepartmentInput } from './dto/create-department.input'
import { UpdateDepartmentInput } from './dto/update-department.input'

@Injectable()
export class DepartmentsService {
  constructor(private prisma: PrismaService) {}

  create({ name, email, phone, initials, unitId }: CreateDepartmentInput) {
    return this.prisma.department.create({
      data: {
        name,
        email,
        phone,
        initials,
        unit: {
          connect: {
            id: unitId,
          },
        },
      },
    })
  }

  findAll() {
    return this.prisma.department.findMany()
  }

  findOne(id: number) {
    return this.prisma.department.findUnique({
      where: { id },
    })
  }

  update(id: number, { email, initials, name, phone }: UpdateDepartmentInput) {
    return this.prisma.department.update({
      where: { id },
      data: {
        email,
        initials,
        name,
        phone,
      },
    })
  }

  remove(id: number) {
    return this.prisma.department.delete({
      where: { id },
    })
  }
}

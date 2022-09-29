import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateUnitInput } from './dto/create-unit.input'
import { UpdateUnitInput } from './dto/update-unit.input'

@Injectable()
export class UnitsService {
  constructor(private prisma: PrismaService) {}

  create({ name, address, email, phone }: CreateUnitInput) {
    return this.prisma.unit.create({
      data: {
        name,
        email,
        phone,
        address: {
          create: {
            ...address,
          },
        },
      },
    })
  }

  findAll() {
    return this.prisma.unit.findMany()
  }

  findOne(id: number) {
    return this.prisma.unit.findUnique({
      where: { id },
    })
  }

  update(id: number, { address, email, name, phone }: UpdateUnitInput) {
    return this.prisma.unit.update({
      where: { id },
      data: {
        email,
        name,
        phone,
        address: {
          update: {
            ...address,
          },
        },
      },
    })
  }

  remove(id: number) {
    return this.prisma.unit.delete({
      where: { id },
    })
  }
}

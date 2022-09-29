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

  update(id: number, updateUnitInput: UpdateUnitInput) {
    return `This action updates a #${id} unit`
  }

  remove(id: number) {
    return `This action removes a #${id} unit`
  }
}

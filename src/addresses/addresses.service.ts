import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class AddressesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.address.findMany()
  }

  findOne(id: number) {
    return this.prisma.address.findUnique({
      where: { id },
    })
  }

  remove(id: number) {
    return this.prisma.address.delete({
      where: { id },
    })
  }
}

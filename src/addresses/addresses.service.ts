import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { UpdateAddressInput } from './dto/update-address.input'

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

  update(id: number, updateAddressInput: UpdateAddressInput) {
    return `This action updates a #${id} address`
  }

  remove(id: number) {
    return `This action removes a #${id} address`
  }
}

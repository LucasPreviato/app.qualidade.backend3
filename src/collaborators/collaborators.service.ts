import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateCollaboratorInput } from './dto/create-collaborator.input'
import { UpdateCollaboratorInput } from './dto/update-collaborator.input'

@Injectable()
export class CollaboratorsService {
  constructor(private prisma: PrismaService) {}

  create({
    admissionAt,
    departmentId,
    email,
    name,
    unitId,
    bond,
    cons,
    fiveYears,
    obsGeneral,
    personalpresentation,
    pros,
    status,
    tasks,
    occupationId,
  }: CreateCollaboratorInput) {
    return this.prisma.collaborator.create({
      data: {
        admissionAt,
        email,
        name,
        bond,
        cons,
        fiveYears,
        obsGeneral,
        personalpresentation,
        pros,
        status,
        tasks,
        department: {
          connect: {
            id: departmentId,
          },
        },
        unit: {
          connect: {
            id: unitId,
          },
        },
        occupation: {
          connect: {
            id: occupationId,
          },
        },
      },
    })
  }

  findAll() {
    return this.prisma.collaborator.findMany()
  }

  findOne(id: number) {
    return this.prisma.collaborator.findUnique({
      where: { id },
    })
  }

  update(
    id: number,
    {
      admissionAt,
      departmentId,
      email,
      name,
      occupationId,
      unitId,
      bond,
      cons,
      fiveYears,
      obsGeneral,
      personalpresentation,
      pros,
      status,
      tasks,
    }: UpdateCollaboratorInput,
  ) {
    return this.prisma.collaborator.update({
      where: { id },
      data: {
        admissionAt,
        email,
        name,
        bond,
        cons,
        fiveYears,
        obsGeneral,
        personalpresentation,
        pros,
        status,
        tasks,
        department: {
          update: {
            id: departmentId,
          },
        },
        unit: {
          update: {
            id: unitId,
          },
        },
        occupation: {
          update: {
            id: occupationId,
          },
        },
      },
    })
  }

  remove(id: number) {
    return this.prisma.collaborator.delete({
      where: { id },
    })
  }
}

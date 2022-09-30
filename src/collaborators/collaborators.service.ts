import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCollaboratorInput } from './dto/create-collaborator.input';
import { UpdateCollaboratorInput } from './dto/update-collaborator.input';

@Injectable()
export class CollaboratorsService {
  constructor(private prisma : PrismaService){}
  create(createCollaboratorInput: CreateCollaboratorInput) {
    return this.prisma.collaborator.create({data:{...createCollaboratorInput}});
  }

  findAll() {
    return `This action returns all collaborators`;
  }

  findOne(id: number) {
    return `This action returns a #${id} collaborator`;
  }

  update(id: number, updateCollaboratorInput: UpdateCollaboratorInput) {
    return `This action updates a #${id} collaborator`;
  }

  remove(id: number) {
    return `This action removes a #${id} collaborator`;
  }
}

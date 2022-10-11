import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import * as bcrypt from "bcrypt"
import { User } from './entities/user.entity';
@Injectable()
export class UsersService {
  constructor (private prisma : PrismaService){}
   async create({email,password}: CreateUserInput): Promise<User> {
    const data  = {
       email,
      password : await bcrypt.hash(password, 10),
      };

     const createdUser = await this.prisma.user.create({ data });
     
      return {
        ...createdUser,
        password: undefined,
      }
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

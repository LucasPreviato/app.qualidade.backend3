import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Bond, Prisma, Status } from '@prisma/client';

@ObjectType()
export class Collaborator  {
    @Field(()=> Int, {nullable:true})
    id?: number;
    @Field()
    admissionAt: Date;
    @Field()
    name: string;
    @Field()
    email: string;
    @Field()
    bond?: Bond;
    @Field()
    status?: Status;
    @Field()
    tasks?: string;
    @Field()
    personalpresentation?: string;
    @Field()
    fiveYears?: string;
    @Field()
    pros?: string;
    @Field()
    cons?: string;
    @Field()
    obsGeneral?: string;
    @Field()
    unitId: number;
    @Field(()=> Int)
    departmentId: number;
    @Field(()=> Int)
    occupationId: number;
  
}

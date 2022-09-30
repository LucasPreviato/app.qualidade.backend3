import { InputType, Int, Field } from '@nestjs/graphql';
import { Bond, Status } from '@prisma/client';

@InputType()
export class CreateCollaboratorInput {
  @Field()
  admissionAt: Date;
  @Field()
  name: string;
  @Field()
  email: string;
  @Field(()=> Bond)
  bond?: Bond;
  @Field(()=> Status)
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

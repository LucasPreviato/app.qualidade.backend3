import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Jobcategory {
  @Field(() => Int, { description: 'id field' })
  id: number;
  @Field()
  name: string
}

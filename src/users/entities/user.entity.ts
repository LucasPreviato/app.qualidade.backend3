import { ObjectType, Field} from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => String, { description: 'Example field (placeholder)' })
  id?: string;
  @Field()
  email  : string
  @Field({nullable : true})
  password? :string
}


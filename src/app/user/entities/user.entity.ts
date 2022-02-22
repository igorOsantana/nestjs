import { ObjectType, Field, HideField } from '@nestjs/graphql'
import { withSoftDelete } from 'src/common/models/withSoftDelete.model'

@ObjectType()
export class User extends withSoftDelete {
  @Field(() => String)
  name: string

  @Field(() => Date)
  birth_date: Date

  @Field(() => String)
  email: string

  @HideField()
  @Field(() => String)
  password: string
}

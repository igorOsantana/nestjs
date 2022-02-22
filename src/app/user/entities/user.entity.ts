import { ObjectType, Field, ID } from '@nestjs/graphql'

@ObjectType()
export class User {
  @Field(() => ID)
  id: string

  @Field(() => String)
  name: string

  @Field(() => Date)
  birth_date: Date

  @Field(() => String)
  email: string

  @Field(() => String)
  password: string

  @Field()
  created_at: Date

  @Field(() => Date)
  updated_at: Date

  @Field(() => Date, { nullable: true })
  deleted_at: Date
}

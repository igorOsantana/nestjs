import { ObjectType, Field } from '@nestjs/graphql'

@ObjectType()
export class Auth {
  @Field({ nullable: false })
  email: string

  @Field({ nullable: false })
  password: string
}

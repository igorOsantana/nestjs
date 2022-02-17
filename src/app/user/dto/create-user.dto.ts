import { InputType, Field } from '@nestjs/graphql'
import { User } from '../entities/user.entity'

@InputType()
export class CreateUserDto {
  constructor(private readonly user: User) {}

  @Field()
  name: string

  @Field()
  birthDate: Date

  @Field()
  email: string

  @Field()
  password: string
}

import { InputType, Field } from '@nestjs/graphql'
import { User } from '../entities/user.entity'

@InputType()
export class CreateUserDto {
  constructor(private readonly user?: User) {
    this.name = this.user?.name
    this.birthDate = this.user?.birthDate
    this.email = this.user?.email
    this.password = this.user?.password
  }

  @Field()
  name: string

  @Field()
  birthDate: Date

  @Field()
  email: string

  @Field()
  password: string
}

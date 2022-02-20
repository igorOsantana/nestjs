import { InputType, Field } from '@nestjs/graphql'
import { User } from '../entities/user.entity'

@InputType()
export class CreateUserDto {
  constructor(private readonly user?: User) {
    this.name = this.user?.name
    this.birth_date = this.user?.birth_date
    this.email = this.user?.email
    this.password = this.user?.password
  }

  @Field()
  name: string

  @Field()
  birth_date: Date

  @Field()
  email: string

  @Field()
  password: string
}

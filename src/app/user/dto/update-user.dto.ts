import { CreateUserDto } from './create-user.dto'
import { InputType, Field, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateUserDto extends PartialType(CreateUserDto) {
  @Field({ nullable: false })
  id: number

  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  birth_date?: Date

  @Field({ nullable: true })
  email?: string

  @Field({ nullable: true })
  password?: string
}

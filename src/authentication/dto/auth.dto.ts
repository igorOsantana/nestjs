import { InputType, Field } from '@nestjs/graphql'
import { IsEmail, IsString, MinLength, MaxLength } from 'class-validator'

@InputType()
export class AuthDto {
  @IsString()
  @MinLength(6)
  @MaxLength(255)
  @IsEmail()
  @Field({ nullable: false })
  email: string

  @IsString()
  @MinLength(6)
  @MaxLength(255)
  @Field({ nullable: false })
  password: string
}

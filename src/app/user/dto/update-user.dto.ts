import { CreateUserDto } from './create-user.dto';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserDto) {
  @Field(() => Int)
  id: number;
}
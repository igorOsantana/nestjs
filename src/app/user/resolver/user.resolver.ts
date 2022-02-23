import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { UserService } from '../service/user.service'
import { User } from '../entities/user.entity'
import { CreateUserDto } from '../dto/createUser.dto'
import { UpdateUserDto } from '../dto/updateUser.dto'

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(@Args('createUserDto') createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto)
  }

  @Query(() => [User])
  findAll() {
    return this.userService.findAll()
  }

  @Query(() => User)
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne(id)
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserDto') updateUserDto: UpdateUserDto) {
    return this.userService.update(updateUserDto)
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.remove(id)
  }
}

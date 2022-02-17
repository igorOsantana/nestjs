import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common'
import { Args } from '@nestjs/graphql'
import { CreateUserDto } from '../../dto/create-user.dto'
import { User } from '../../entities/user.entity'
import { UserService } from '../../service/user.service'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async find(): Promise<User[]> {
    return this.userService.findAll()
  }

  @Get(':id')
  async findOne(@Args('id') id: string): Promise<User> {
    return this.userService.findOne(id)
  }

  @Post()
  async create(@Body() newUser: CreateUserDto): Promise<User> {
    return this.userService.create(newUser)
  }

  @Put(':id')
  async update(
    @Args('id') id: string,
    @Body() updateUserInput: User,
  ): Promise<User> {
    return this.userService.update(id, updateUserInput)
  }

  @Delete(':id')
  async delete(@Args('id') id: string): Promise<string> {
    return this.userService.remove(id)
  }
}

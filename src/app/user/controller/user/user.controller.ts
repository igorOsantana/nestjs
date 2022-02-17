import { Body, Controller, Post } from '@nestjs/common'
import { CreateUserDto } from '../../dto/create-user.dto'
import { User } from '../../entities/user.entity'
import { UserService } from '../../service/user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  async find(): Promise<User[]> {
    return this.userService.findAll()
  }

  findOne() {
    return 'Hello world!'
  }

  @Post()
  async create(@Body() newUser: CreateUserDto): Promise<User> {
    return this.userService.create(newUser)
  }

  update() {
    return 'Hello world!'
  }

  delete() {
    return 'Hello world!'
  }
}

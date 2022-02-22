import { Body, Injectable, Param } from '@nestjs/common'
import { CreateUserDto } from '../dto/create-user.dto'
import { UpdateUserDto } from '../dto/update-user.dto'
import { User } from '../entities/user.entity'

@Injectable()
export class UserService {
  async findAll(): Promise<User[]> {
    return null
  }

  async findOne(id: string): Promise<User> {
    return null
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    return null
  }

  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return null
  }

  async remove(id: string): Promise<string> {
    return null
  }
}

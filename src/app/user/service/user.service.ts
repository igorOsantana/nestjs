import { Injectable } from '@nestjs/common'
import { CreateUserDto } from '../dto/create-user.dto'
import { UpdateUserInput } from '../dto/update-user.dto'
import { User } from '../entities/user.entity'

@Injectable()
export class UserService {
  async findAll(): Promise<User[]> {
    return Promise.resolve([])
  }

  async findOne(id: string): Promise<User> {
    return Promise.resolve(null)
  }

  async create(createUserInput: CreateUserDto): Promise<User> {
    try {
      return Promise.resolve(null)
    } catch (error) {
      throw new Error()
    }
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<User> {
    return Promise.resolve(null)
  }

  async remove(id: string): Promise<string> {
    return `This action removes a #${id} user`
  }
}

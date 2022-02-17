import { Injectable } from '@nestjs/common'
import { CreateUserDto } from '../dto/create-user.dto'
import { UpdateUserInput } from '../dto/update-user.dto'
import { User } from '../entities/user.entity'

@Injectable()
export class UserService {
  async findAll(): Promise<User[]> {
    return Promise.resolve([])
  }

  async findOne(id: number): Promise<User> {
    return Promise.resolve(null)
  }

  async create(createUserInput: CreateUserDto): Promise<User> {
    try {
      return Promise.resolve(null)
    } catch (error) {
      throw new Error()
    }
  }

  async update(id: number, updateUserInput: UpdateUserInput): Promise<User> {
    return Promise.resolve(null)
  }

  async remove(id: number): Promise<string> {
    return `This action removes a #${id} user`
  }
}

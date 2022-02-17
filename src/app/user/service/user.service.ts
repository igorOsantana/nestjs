import { Injectable } from '@nestjs/common'
import { userStub } from '../../../../test/stubs/user.stub'
import { CreateUserDto } from '../dto/create-user.dto'
import { UpdateUserInput } from '../dto/update-user.dto'
import { User } from '../entities/user.entity'

@Injectable()
export class UserService {
  async create(createUserInput: CreateUserDto): Promise<User> {
    try {
      return Promise.resolve(userStub())
    } catch (error) {
      throw new Error()
    }
  }

  async findAll(): Promise<User[]> {
    return Promise.resolve([userStub()])
  }

  async findOne(id: number): Promise<User> {
    return Promise.resolve(userStub())
  }

  async update(id: number, updateUserInput: UpdateUserInput): Promise<User> {
    return Promise.resolve(userStub())
  }

  async remove(id: number): Promise<string> {
    return `This action removes a #${id} user`
  }
}

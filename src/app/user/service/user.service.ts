import { Body, Injectable, Param } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateUserDto } from '../dto/create-user.dto'
import { UpdateUserDto } from '../dto/update-user.dto'
import { User } from '../entities/user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find()
  }

  async findOne(id: string): Promise<User> {
    return this.userRepository.findOneOrFail(id)
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto)
    return await this.userRepository.save(user)
  }

  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const user = await this.findOne(id)
    const userToUpdate = { ...user, ...updateUserDto }
    await this.userRepository.update(id, userToUpdate)
    return userToUpdate
  }

  async remove(id: string): Promise<string> {
    const result = await this.userRepository.softDelete(id)
    console.log('result: ', result)
    return null
  }
}

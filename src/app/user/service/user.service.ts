import { Body, Injectable } from '@nestjs/common'

import { PrismaService } from '../../../prisma/prisma.service'

import { CreateUserDto } from '../dto/createUser.dto'
import { UpdateUserDto } from '../dto/updateUser.dto'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.user.findMany()
  }

  async findOne(id: number) {
    return this.prisma.user.findFirst({ where: { id } })
  }

  async create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto })
  }

  async update(@Body() updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id: updateUserDto.id },
      data: updateUserDto,
    })
  }

  async remove(id: number) {
    return this.prisma.user.delete({ where: { id } })
  }
}

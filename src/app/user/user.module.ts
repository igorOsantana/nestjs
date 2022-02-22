import { Module } from '@nestjs/common'
import { UserService } from '../user/service/user.service'
import { UserResolver } from '../user/resolver/user.resolver'
import { PrismaService } from 'src/prisma/prisma.service'

@Module({
  imports: [],
  providers: [UserResolver, UserService, PrismaService],
  exports: [UserService],
})
export class UserModule {}

import { Module } from '@nestjs/common'
import { UserService } from '../user/service/user.service'
import { UserResolver } from '../user/resolver/user.resolver'
import { UserController } from './controller/user/user.controller'

@Module({
  providers: [UserResolver, UserService],
  controllers: [UserController],
})
export class UserModule {}

import { Module } from '@nestjs/common'
import { UserService } from '../user/service/user.service'
import { UserResolver } from '../user/resolver/user.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './entities/user.entity'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule {}

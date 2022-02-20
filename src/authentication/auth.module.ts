import { Module } from '@nestjs/common'
import { AuthService } from './service/auth.service'
import { AuthResolver } from './resolver/auth.resolver'
import { UserModule } from 'src/app/user/user.module'

@Module({
  imports: [UserModule],
  providers: [AuthResolver, AuthService],
})
export class AuthModule {}

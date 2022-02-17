import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { configOrm } from '../ormconfig'

// controllers
import { AppController } from './app.controller'
import { AuthController } from './authentication/controller/auth.controller'
import { UserController } from './app/user/controller/user.controller'
// services
import { AppService } from './app.service'
import { AuthService } from './authentication/service/auth.service'
import { UserService } from './app/user/service/user.service'
// modules
import { AuthModule } from './authentication/auth.module'
import { UserModule } from './app/user/user.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync(configOrm),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController, AuthController, UserController],
  providers: [AppService, AuthService, UserService],
})
export class AppModule {}

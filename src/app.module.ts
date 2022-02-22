import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { PrismaModule } from 'nestjs-prisma'
// controllers
import { AppController } from './app.controller'
// services
import { AppService } from './app.service'
import { PrismaService } from './prisma/prisma.service'
// modules
import { AuthModule } from './authentication/auth.module'
import { UserModule } from './app/user/user.module'
// middlewares
import { loggingMiddleware } from './common/middlewares'

@Module({
  imports: [
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        middlewares: [loggingMiddleware()],
      },
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      playground: true,
    }),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

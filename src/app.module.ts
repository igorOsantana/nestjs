import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { PrismaModule } from 'nestjs-prisma'
// modules
import { AuthModule } from './authentication/auth.module'
import { UserModule } from './app/user/user.module'
// resolvers
import { AppResolver } from './app.resolver'
// services
import { AppService } from './app.service'
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
  providers: [AppService, AppResolver],
})
export class AppModule {}

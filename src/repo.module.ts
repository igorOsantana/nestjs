import { Global, Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { RepoService } from './repo.service'
import { User } from './app/user/entities/user.entity'

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [RepoService],
  exports: [RepoService],
})
export class RepoModule {}

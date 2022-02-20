import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './app/user/entities/user.entity'

@Injectable()
export class RepoService {
  public constructor(
    @InjectRepository(User) public readonly userRepo: Repository<User>,
  ) {}
}

import { Test, TestingModule } from '@nestjs/testing'
import { UserResolver } from './user.resolver'
import { UserService } from '../service/user.service'

describe('UserResolver', () => {
  let resolver: UserResolver
  let service: UserService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserResolver, UserService],
    }).compile()

    resolver = module.get<UserResolver>(UserResolver)
    service = module.get<UserService>(UserService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})

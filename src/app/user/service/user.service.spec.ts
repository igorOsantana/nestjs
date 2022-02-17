import { Test, TestingModule } from '@nestjs/testing'
import { UserService } from './user.service'
import { userStub } from '../../../../test/stubs/user.stub'

jest.mock('./user.service')

describe('UserService', () => {
  let service: UserService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile()

    service = module.get<UserService>(UserService)
  })

  describe('findAll method', () => {
    describe('when findAll is called', () => {
      test('then it should be called', async () => {
        await service.findAll()
        expect(service.findAll).toHaveBeenCalledTimes(1)
      })
    })

    test('then it should return an array of User on success', async () => {
      const users = await service.findAll()
      expect(users).toEqual([userStub()])
    })
  })
})

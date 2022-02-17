import { Test, TestingModule } from '@nestjs/testing'
import { UserService } from './user.service'
import { userStub } from '../../../../test/stubs/user.stub'
import { User } from '../entities/user.entity'
import { CreateUserDto } from '../dto/create-user.dto'

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

      test('then it should return an array of User on success', async () => {
        const users = await service.findAll()
        expect(users).toEqual([userStub()])
      })
    })
  })

  describe('findOne method', () => {
    describe('when findOne is called', () => {
      let user: User

      beforeEach(() => {
        user = userStub()
      })

      test('then it should be call', async () => {
        await service.findOne(user.id)
        expect(service.findOne).toHaveBeenCalledTimes(1)
      })

      test('then it should return a User on success', async () => {
        const userFounded = await service.findOne(user.id)
        expect(userFounded).toEqual(userStub())
      })
    })
  })

  describe('create method', () => {
    describe('when create is called', () => {
      let newUser: CreateUserDto

      beforeEach(() => {
        newUser = new CreateUserDto(userStub())
      })

      test('then it should be call', async () => {
        await service.create(newUser)
        expect(service.create).toHaveBeenCalledTimes(1)
      })

      test('then it should be called with correct values', async () => {
        const userCreated = await service.create(newUser)

        expect(userCreated).toEqual(userStub())
        expect(service.create).toHaveBeenCalledWith(newUser)
      })
    })
  })
})

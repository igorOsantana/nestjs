import { Test, TestingModule } from '@nestjs/testing'
import { UserController } from './user.controller'
import { UserService } from '../service/user.service'
import { CreateUserDto } from '../dto/create-user.dto'
import { userStub } from '../../../../test/stubs/user.stub'
import { User } from '../entities/user.entity'

jest.mock('../service/user.service')

describe('UserController', () => {
  let userController: UserController
  let userService: UserService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile()

    userController = module.get<UserController>(UserController)
    userService = module.get<UserService>(UserService)
    jest.clearAllMocks()
  })

  describe('find method', () => {
    describe('when find method is called', () => {
      test('then it should call UserService with correct values', async () => {
        userController.find()
        expect(userService.findAll).toHaveBeenCalled()
      })

      test('then it should throw an exception if UserService throws', async () => {
        jest.spyOn(userService, 'findAll').mockRejectedValueOnce(new Error())
        await expect(userController.find()).rejects.toThrowError()
      })

      test('then it should return an array of User on success', async () => {
        const users = await userController.find()
        expect(users).toEqual([userStub()])
      })
    })
  })

  describe('findOne method', () => {
    describe('when findOne method is called', () => {
      let user: User

      beforeEach(() => {
        user = userStub()
      })

      test('then it should call UserService with correct values', async () => {
        await userController.findOne(user.id)
        expect(userService.findOne).toHaveBeenCalled()
      })

      test('then it should throw an exception if UserService throws', async () => {
        jest.spyOn(userService, 'findOne').mockRejectedValueOnce(new Error())
        const promise = userController.findOne(user.id)

        await expect(promise).rejects.toThrowError()
      })

      test('then it should return a User on success', async () => {
        const userFounded = await userController.findOne(user.id)
        expect(userFounded).toEqual(user)
      })
    })
  })

  describe('create method', () => {
    describe('when create is called', () => {
      let newUser: CreateUserDto

      beforeEach(() => {
        newUser = new CreateUserDto(userStub())
      })

      test('then it should call UserService with correct values', async () => {
        await userController.create(newUser)
        expect(userService.create).toHaveBeenCalledWith(newUser)
      })

      test('then it should throw an exception if UserService throws', async () => {
        jest.spyOn(userService, 'create').mockImplementationOnce(() => {
          throw new Error()
        })
        const promise = userController.create(newUser)

        expect(userService.create).toHaveBeenCalledTimes(1)
        await expect(promise).rejects.toThrowError()
      })

      test('then it should return a new user on success', async () => {
        const user = await userController.create(newUser)
        expect(user).toEqual(userStub())
      })
    })
  })

  describe('update method', () => {
    describe('when update is called', () => {
      let user: User
      let userUpdated: User

      beforeEach(() => {
        user = userStub()
        userUpdated = { ...userStub(), name: 'update_name' }
      })

      test('then it should call UserService with correct values', async () => {
        await userController.update(user.id, user)
        expect(userService.update).toHaveBeenCalledWith(user.id, user)
      })

      test('then it should throw an exception if UserService throws', async () => {
        jest.spyOn(userService, 'update').mockImplementationOnce(() => {
          throw new Error()
        })
        const promise = userController.update(user.id, user)

        expect(userService.update).toHaveBeenCalledTimes(1)
        await expect(promise).rejects.toThrowError()
      })

      test('then it should return a user updated on success', async () => {
        jest.spyOn(userService, 'update').mockResolvedValueOnce(userUpdated)
        const updatedUser = await userController.update(user.id, user)

        expect(updatedUser).toEqual(userUpdated)
      })
    })
  })

  describe('delete method', () => {
    describe('when delete is called', () => {
      let user: User

      beforeEach(() => {
        user = userStub()
      })

      test('then it should call UserService with correct values', async () => {
        await userController.delete(user.id)
        expect(userService.remove).toHaveBeenCalledWith(user.id)
      })

      test('then it should throw an exception if UserService throws', async () => {
        jest.spyOn(userService, 'remove').mockImplementationOnce(() => {
          throw new Error()
        })
        const promise = userController.delete(user.id)

        expect(userService.remove).toHaveBeenCalledTimes(1)
        await expect(promise).rejects.toThrowError()
      })

      test('then it should return null on success ', async () => {
        const result = await userController.delete(user.id)
        expect(result).toBeNull()
      })
    })
  })
})

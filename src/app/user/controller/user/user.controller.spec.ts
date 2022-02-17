import { Test, TestingModule } from '@nestjs/testing'
import { UserController } from './user.controller'
import { UserService } from '../../service/user.service'
import { CreateUserDto } from '../../dto/create-user.dto'
import { userStub } from '../../../../../test/stubs/user.stub'

jest.mock('../../service/user.service')

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

  describe('create', () => {
    describe('when create is called', () => {
      let newUser: CreateUserDto

      beforeEach(() => {
        newUser = new CreateUserDto(userStub())
      })

      test('then it should throw an exception if UserService throws', async () => {
        jest.spyOn(userService, 'create').mockImplementationOnce(() => {
          throw new Error()
        })
        const promise = userController.create(newUser)

        expect(userService.create).toHaveBeenCalledTimes(1)
        await expect(promise).rejects.toThrowError()
      })
    })
  })
})
import { userStub } from '../../../../../test/stubs/user.stub'

export const UserService = jest.fn().mockReturnValue({
  create: jest.fn().mockResolvedValue(userStub()),
  findAll: jest.fn().mockResolvedValue([userStub()]),
  findOne: jest.fn().mockResolvedValue(userStub()),
  update: jest.fn().mockResolvedValue(userStub()),
  remove: jest.fn().mockResolvedValue('any_response'),
})

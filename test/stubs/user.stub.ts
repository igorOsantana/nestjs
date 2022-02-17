import { User } from 'src/app/user/entities/user.entity'

export const userStub = (): User => {
  const date = new Date(1, 1, 1)
  return {
    id: 'any_id',
    name: 'any_name',
    birthDate: date,
    email: 'any_email@mail.com',
    password: 'any_password',
    createdAt: date,
    updatedAt: date,
  }
}

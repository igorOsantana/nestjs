import { User } from 'src/app/user/entities/user.entity'

export const userStub = (): User => {
  const date = new Date(1, 1, 1)
  return {
    id: 'any_id',
    name: 'any_name',
    birth_date: date,
    email: 'any_email@mail.com',
    password: 'any_password',
    created_at: date,
    updated_at: date,
    deleted_at: null,
  }
}

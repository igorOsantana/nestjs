import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';

const makeFakeCredencials = () => ({
  email: 'any_email@mail.com',
  password: 'any_password',
})

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  it('should call login with correct values', () => {
    const loginSpy = jest.spyOn(authService, 'login');

    authService.login(makeFakeCredencials());
    expect(loginSpy).toBeCalledWith(makeFakeCredencials())
  });

  it('should throw if login throws', () => {
    jest.spyOn(authService, 'login').mockRejectedValueOnce(new Error());

    const promise = authService.login(makeFakeCredencials());
    expect(promise).rejects.toThrow()
  });
});
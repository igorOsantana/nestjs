import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';

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
    const authentication = {
      email: 'any_email@mail.com',
      password: 'any_password',
    }
    const loginSpy = jest.spyOn(authService, 'login');
    
    authService.login(authentication);
    expect(loginSpy).toBeCalledWith(authentication)
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';

const makeFakeCredencials = () => ({
  email: 'any_email@mail.com',
  password: 'any_password',
});

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call auth method with correct values', () => {
    const authSpy = jest.spyOn(service, 'auth');
    service.auth(makeFakeCredencials());

    expect(authSpy).toHaveBeenCalledWith(makeFakeCredencials());
  });

  it('should throw if auth method throws', () => {
    jest.spyOn(service, 'auth').mockRejectedValueOnce(new Error('any_error'));
    const promise = service.auth(makeFakeCredencials());

    expect(promise).rejects.toThrow('any_error');
  });

  it('should return a token on success auth method', async () => {
    jest.spyOn(service, 'auth').mockResolvedValueOnce('any_token');
    const token = await service.auth(makeFakeCredencials());

    expect(token).toEqual('any_token');
  });
});

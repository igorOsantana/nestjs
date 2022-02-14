import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login(credencials: { email: string, password: string } ) {
    return Promise.resolve(credencials);
  }
}

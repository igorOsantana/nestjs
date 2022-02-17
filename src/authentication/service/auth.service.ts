import { Injectable } from '@nestjs/common';
import { AuthDto } from '../dto/auth.dto';

@Injectable()
export class AuthService {
  auth(authInput: AuthDto): Promise<string>{
    return Promise.resolve(null);
  }
}

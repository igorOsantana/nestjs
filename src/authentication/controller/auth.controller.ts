import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { AuthDto } from '../dto/auth.dto';

@Controller({ path: '/auth' })
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  authentication(@Body(ValidationPipe) credencials: AuthDto): string | null {
    return null;
  }
}

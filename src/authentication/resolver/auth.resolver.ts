import { Resolver, Query, Args } from '@nestjs/graphql';
import { AuthService } from '../service/auth.service';
import { Auth } from '../entities/auth.entity';
import { AuthDto } from '../dto/auth.dto';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => Auth)
  auth(@Args('authInput') authInput: AuthDto) {
    return this.authService.auth(authInput);
  }
}

import { Request, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginUserInput } from './dto/login-user.input';
import { UserToken } from './dto/user-token';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Resolver()
export class AuthResolver {
    constructor(private readonly authService: AuthService) {}

    @Mutation(() => UserToken)
    @UseGuards(LocalAuthGuard)
    login(@Args('loginUserInput' )loginUserInput : LoginUserInput) {
      return  this.authService.login(loginUserInput);
    }
}

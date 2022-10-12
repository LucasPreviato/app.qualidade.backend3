import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Resolver()
export class AuthResolver {
    constructor(private readonly authService: AuthService) {}

    // @Mutation(() => Login)
    // @UseGuards(LocalAuthGuard)
    // login(@Args('createUserInput') {
    // //   return  this.authService.login();
    // }
}

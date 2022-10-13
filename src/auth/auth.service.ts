import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from "bcrypt"
import { LoginUserInput } from './dto/login-user.input';
import { UserPayload } from './models/userPayload';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './dto/user-token';
@Injectable()
export class AuthService {
    constructor ( private readonly usersService : UsersService, private readonly jwtService : JwtService){}

    async validateUser(email: string, password: string) {
        const user = await this.usersService.findByEmail(email);
        
        if(user){
            const  isPasswordValid = await  bcrypt.compare(password, user.password);
            
            if ( isPasswordValid){
                return {
                    ...user,
                    password: undefined
                }
            }
        }
        throw new Error("Email address or password provided is incorrect.")
    }
    
    async login({email,}: LoginUserInput) : Promise<UserToken> {
       const user = await this.usersService.findByEmail(email);
        const {password, ...result} = user
        const payload : UserPayload = {
            sub : user.id,
            email: user.email
        };
        const jwtToken = this.jwtService.sign(payload);
        return {
          access_token: jwtToken,
          user : result
        }
    }
}

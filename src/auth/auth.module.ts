import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { LocalStrategy } from './strategies/local-strategy';

@Module({
    imports : [
        UsersModule,
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions :{expiresIn:"30d"},
        })
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy, AuthResolver]
})
export class AuthModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        throw new Error('Method not implemented.');
    }
}

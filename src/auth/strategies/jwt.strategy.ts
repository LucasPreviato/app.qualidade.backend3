import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt } from "passport-jwt";
import { Strategy } from "passport-local";
import { UserFromJwt } from "../models/userFromJwt";
import { UserPayload } from "../models/userPayload";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey : process.env.JWT_SECRET,
        });
    }
    async validate(payload: UserPayload): Promise<UserFromJwt>{
        return {
            id: payload.sub,
            email : payload.email
        }
    }
}

    
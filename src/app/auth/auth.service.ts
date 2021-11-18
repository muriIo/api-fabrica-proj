import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { compareSync } from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) {

    }

    async login(user: any) {
        const payload = {
            sub: user.id,
            email: user.email
        }

        return {
            token: this.jwtService.sign(payload)
        }
    }

    async validateUser(email: String, password: String) {
        let user: any;
        try {
            user = await this.userService.getByEmail(email);

            console.log(user);
            if (user.password == null) {
                return null
            }

            const isPasswordValid = compareSync(password, user.password);

            if (!isPasswordValid) return null;

            return user;
        } catch (error) {
            return null;
        }
    }

}

import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private usersService: UserService, private jwtService: JwtService) {}

    // TODO: create DTO
    async signIn(email: string, password: string): Promise<any> {
        // TODO: remove any type
        const user = await this.usersService.findUser({ email, password });

        const payload = { account: user.account };

        return {
            access_token: await this.jwtService.signAsync(payload, { secret: 'secret' })
        };
    }
}

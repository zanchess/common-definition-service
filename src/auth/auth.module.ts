import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { JwtService } from '@nestjs/jwt';
import { JwtModule } from '@nestjs/jwt';

@Module({
    controllers: [AuthController],
    providers: [AuthService, JwtService],
    imports: [
        UserModule,
        JwtModule.register({
            global: true
        })
    ]
})
export class AuthModule {}

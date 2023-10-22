import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../user.service';
import { UserController } from '../user.controller';
import { getModelToken } from '@nestjs/mongoose';

describe('UserService', () => {
    let service: UserService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UserController],
            providers: [
                UserService,
                {
                    provide: getModelToken('User'), // Use the schema name passed to getModelToken()
                    useValue: {} // Add a mock model or any specific methods if needed
                }
            ]
        }).compile();

        service = module.get<UserService>(UserService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});

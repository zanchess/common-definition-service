import { Test, TestingModule } from '@nestjs/testing';
import { WordDefinitionService } from '../wordDefinition.service';

describe('WordDefinitionService', () => {
  let service: WordDefinitionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WordDefinitionService],
    }).compile();

    service = module.get<WordDefinitionService>(WordDefinitionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

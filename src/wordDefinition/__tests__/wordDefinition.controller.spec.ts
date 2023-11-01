import { Test, TestingModule } from '@nestjs/testing';
import { WordDefinitionController } from '../wordDefinition.controller';

describe('WordDefinitionController', () => {
  let controller: WordDefinitionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WordDefinitionController],
    }).compile();

    controller = module.get<WordDefinitionController>(WordDefinitionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

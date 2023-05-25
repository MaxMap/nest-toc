import { Module } from '@nestjs/common';
import { AtestController } from './atest.controller';
import { AtestService } from './atest.service';

@Module({
  controllers: [AtestController],
  providers: [AtestService],
})
export class AtestModule {}

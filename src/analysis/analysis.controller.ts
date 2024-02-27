import { Body, Controller, Get, Param, Post, Query, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AnalyzeDto } from './dtos/analyze.dto';
import { AnalysisService } from './analysis.service';
import { AuthGuard } from '../guards/auth.guard';
import { User } from '../users/user.entity';
import { Serialize } from '../interceptors/serialize.interceptor';
import { GetAnalisisDto } from './dtos/get-analisis.dto';
import { CurrentUser } from '../users/decorators/usersDecorators';

@Controller('/analyze')
export class AnalysisController {
  constructor(private analysisService: AnalysisService) {}


  @Post()
  @UseGuards(AuthGuard)
  @Serialize(GetAnalisisDto)
  analyze(@Body() body: AnalyzeDto, @CurrentUser() user: User) {
    return this.analysisService.analyzeEntry(body, user);
  }

  @Get('/me')
  @UseGuards(AuthGuard)
  getMyAnalysis(@Query('date') date: string) {
    return this.analysisService.getAnalysis(date);
  }

  @Get('/:id')
  @UseGuards(AuthGuard)
  @Serialize(GetAnalisisDto)
  getAnalysis(@Param('id') id: number) {
    return this.analysisService.getAnalysisById(id);
  }
}

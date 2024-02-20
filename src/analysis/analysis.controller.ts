import { Body, Controller, Get, Post } from '@nestjs/common';
import { AnalyzeDto } from './dtos/analyze.dto';
import { AnalysisService } from './analysis.service';

@Controller('/analyze')
export class AnalysisController {
  constructor(private analysisService: AnalysisService) {}

  @Post()
  analyze(@Body() body: AnalyzeDto) {
    return this.analysisService.analyzeEntry(body);
  }

  @Get('/me')
  getMyAnalysis() {
    return this.analysisService.getAnalysis();
  }
}

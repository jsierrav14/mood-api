import { IsBoolean, IsDate, IsNumber, IsString, } from 'class-validator';

export class AnalysisDto {
  @IsString()
  mood: string;
  @IsString()
  subject: string;
  @IsBoolean()
  negative: boolean;
  @IsString()
  summary: string;
  @IsString()
  color: string;
  @IsNumber()
  sentimentScore: number;
  @IsDate()
  date: Date;
}

import { Expose, Transform } from 'class-transformer';

export class GetAnalisisDto {
  @Expose()
  id: number;
  @Expose()
  mood: string;
  @Expose()
  subject: string;
  @Expose()
  negative: boolean;
  @Expose()
  summary: string;
  @Expose()
  color: string;
  @Expose()
  sentimentScore: number;
  @Expose()
  date: Date;
  @Transform(({ obj }) => obj.user.id)
  @Expose()
  userId: number;
}

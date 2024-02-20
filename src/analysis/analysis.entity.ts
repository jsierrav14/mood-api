import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Analysis{
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  mood: string;
  @Column()
  subject: string;
  @Column()
  negative: boolean;
  @Column()
  summary: string;
  @Column()
  color: string;
  @Column()
  sentimentScore: number;
}

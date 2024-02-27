import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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
  @Column()
  date: Date;

  @ManyToOne(() => User, (user) => user.analisis)
  user: User;
}

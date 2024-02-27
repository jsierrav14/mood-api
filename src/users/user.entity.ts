import { Analysis } from "../analysis/analysis.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
 @PrimaryGeneratedColumn()
 id:number;
 @Column()
 email:string;
 @Column()
 password:string;

 @OneToMany(()=> Analysis, (analisis) => analisis.user )
  analisis : Analysis[]
}
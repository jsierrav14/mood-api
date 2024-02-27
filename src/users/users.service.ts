import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(email: string, password: string) {
    const user = this.repo.create({ email, password });
    return this.repo.save(user);
  }

  find(email: string) {
    return this.repo.find({ where: { email } });
  }

  async findOne(id: number) {
    if (!id) return null;
     const user : User= await this.repo.findOne({ where: { id } }) ;
     console.log("🚀 ~ UsersService ~ findOne ~ user:", user)

     return user;
  }
}

import { CallHandler, ExecutionContext, NestInterceptor, UseInterceptors } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Observable, map } from 'rxjs';
import { UserDto } from '../users/dto/user.dto';
import { AnalysisDto } from 'src/analysis/dtos/analysis.dto';

interface ClassConstructor {
  new(...args: any[]): {};
}

export function Serialize(dto: ClassConstructor){
    return UseInterceptors(new SerializeInterceptor(dto));
};

export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: any) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: any) => {
        return plainToClass(UserDto , data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}

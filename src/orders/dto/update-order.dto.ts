import { IsDateString, IsEnum, IsNumber, IsOptional } from 'class-validator';
import { order_status } from '@prisma/client';

export class UpdateOrderDto {
  @IsOptional()
  @IsDateString()
  order_date?: Date;

  @IsOptional()
  @IsEnum(order_status)
  status?: order_status;

  @IsOptional()
  @IsNumber()
  total?: number;

  @IsOptional()
  @IsNumber()
  user_id?: number;
}

import { IsDateString, IsNotEmpty, IsNumber, IsEnum } from 'class-validator';
import { order_status } from '@prisma/client';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsDateString()
  order_date: Date;

  @IsNotEmpty()
  @IsEnum(order_status)
  status: order_status;

  @IsNotEmpty()
  @IsNumber()
  total: number;

  @IsNotEmpty()
  @IsNumber()
  user_id: number;
}

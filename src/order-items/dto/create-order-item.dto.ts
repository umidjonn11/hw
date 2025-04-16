import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrderItemDto {
  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  order_id: number;

  @IsNotEmpty()
  @IsNumber()
  product_id: number;
}

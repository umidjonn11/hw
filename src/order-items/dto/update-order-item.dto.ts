import { IsOptional } from "class-validator";

export class UpdateOrderItemDto {
    @IsOptional()
    quantity?:number

    @IsOptional()
    price?:number
}

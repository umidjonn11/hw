import { Injectable } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class OrderItemsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateOrderItemDto) {
    return this.prisma.order_items.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.order_items.findMany({
      include: { Order: true, Products: true },
    });
  }

  findOne(id: number) {
    return this.prisma.order_items.findUnique({
      where: { id },
      include: { Order: true, Products: true },
    });
  }

  update(id: number, data: UpdateOrderItemDto) {
    return this.prisma.order_items.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.order_items.delete({
      where: { id },
    });
  }
}

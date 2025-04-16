import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}
  create(data: CreateOrderDto) {
    return this.prisma.orders.create({
      data,
    });
  }

  findAll() {
    return this.prisma.orders.findMany({
      include: { User: true,},
    });
  }

  findOne(id: number) {
    return this.prisma.orders.findUnique({
      where: { id },
      include: { User: true},
    });
  }

  update(id: number, data: UpdateOrderDto) {
    return this.prisma.orders.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.orders.delete({
      where:{id},
    });
  }
}

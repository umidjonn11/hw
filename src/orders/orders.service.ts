import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}
 async create(data: CreateOrderDto) {
    return this.prisma.orders.create({
      data,
    });
  }

 async findAll() {
    return this.prisma.orders.findMany({
      include: { User: true,},
    });
  }

async  findOne(id: number) {
    return this.prisma.orders.findUnique({
      where: { id },
      include: { User: true},
    });
  }

 async update(id: number, data: UpdateOrderDto) {
    return this.prisma.orders.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.orders.delete({
      where:{id},
    });
  }
}

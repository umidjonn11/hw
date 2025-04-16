import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateProductDto) {
    return this.prisma.products.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.products.findMany({
      include: { Category: true },
    });
  }

  findOne(id: number) {
    return this.prisma.products.findUnique({
      where: { id },
      include: { Category: true },
    });
  }

  update(id: number, data: UpdateProductDto) {
    return this.prisma.products.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.products.delete({ where: { id } });
  }
}

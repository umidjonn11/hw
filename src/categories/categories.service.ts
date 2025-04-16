import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateCategoryDto) {
    return this.prisma.categories.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.categories.findMany({});
  }

 async findOne(id: number) {
    return this.prisma.categories.findUnique({
      where: { id },
    });
  }

 async update(id: number, data: UpdateCategoryDto) {
    return this.prisma.categories.update({
      where: { id },
      data,
    });
  }

 async remove(id: number) {
    return this.prisma.categories.delete({
      where: { id },
    });
  }
}

import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaService } from 'prisma/prisma.service';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { OrderItemsModule } from './order-items/order-items.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [UsersModule, OrdersModule, ProductsModule, OrderItemsModule, CategoriesModule],
  providers: [PrismaService],
})
export class AppModule {}

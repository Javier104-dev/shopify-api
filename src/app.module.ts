import { Module } from '@nestjs/common';
import { ShopifyModule } from './module/shopify/shopify.module';

@Module({
  imports: [ShopifyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

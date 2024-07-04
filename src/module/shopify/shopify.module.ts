import { Module } from '@nestjs/common';
import { ShopifyController } from './shopify.controller';

@Module({
  controllers: [ShopifyController],
  providers: [],
})
export class ShopifyModule {}

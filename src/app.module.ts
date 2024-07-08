import { Module } from '@nestjs/common';
import { ShopifyModule } from './module/shopify/shopify.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), ShopifyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

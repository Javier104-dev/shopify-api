import { Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import '@shopify/shopify-api/adapters/node';
import { ShopifyService } from './shopify.service';

@Controller('api/v1/shopify')
export class ShopifyController {
  constructor(private readonly shopifyService: ShopifyService) {}
  @Post()
  async postProduct() {
    return this.shopifyService.postProduct();
  }

  @Get()
  async getProduct(@Query() identicicador: any) {
    const { id } = identicicador;
    return this.shopifyService.getProduct(id);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    return this.shopifyService.deleteProduct(id);
  }
}

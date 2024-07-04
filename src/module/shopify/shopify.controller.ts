import { Controller, Post } from '@nestjs/common';

@Controller('api/v1/shopify')
export class ShopifyController {
  @Post()
  async prueba() {
    console.log('pruebas');
  }
}

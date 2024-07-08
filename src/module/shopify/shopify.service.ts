import { Injectable } from '@nestjs/common';
import {
  DataType,
  LATEST_API_VERSION,
  Session,
  Shopify,
  shopifyApi,
} from '@shopify/shopify-api';
import { RestClient } from '@shopify/shopify-api/dist/ts/lib/clients/admin/rest/client';

@Injectable()
export class ShopifyService {
  shopify: Shopify;
  session: Session;
  client: RestClient;

  constructor() {
    this.shopify = shopifyApi({
      apiKey: process.env.API_KEY,
      apiSecretKey: process.env.SECRET_KEY,
      scopes: ['read_products'],
      hostName: 'localhost:4321',
      apiVersion: LATEST_API_VERSION,
      isEmbeddedApp: true,
      isCustomStoreApp: false,
      userAgentPrefix: 'Custom prefix',
    });
    this.session = new Session({
      id: '12145222',
      state: 'state',
      shop: '7627a2-ed.myshopify.com',
      accessToken: process.env.ACCESS_TOKEN,
      isOnline: true,
    });
    this.client = new this.shopify.clients.Rest({ session: this.session });
  }

  async postProduct() {
    const data = await this.client.post({
      path: 'products',
      data: {
        product: {
          title: 'Funciona',
          body_html: '<strong>Good snowboard!</strong>',
          vendor: 'Burton',
          product_type: 'Snowboard',
          status: 'draft',
        },
      },
      type: DataType.JSON,
    });
    return data;
  }

  async getProduct(id: string) {
    const data = await this.client.get({
      path: `products/${id}`,
    });
    return data;
  }

  async deleteProduct(params: string) {
    return await this.client.delete({
      path: `products/${params}`,
    });
  }
}

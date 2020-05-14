import { Request, Response } from 'express';

import CreateProductService from '@modules/products/services/CreateProductService';

import { container } from 'tsyringe';

export default class ProductsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;

    const createProducts = container.resolve(CreateProductService);

    const product = await createProducts.execute({
      name,
      price,
      quantity,
    });

    return response.json(product);
  }
}

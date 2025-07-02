import { Product } from "../domain/entities/product";
import { ICreateProductRepository } from "../domain/repositories/create-product.repository";

export class CreateProductUseCase {
  constructor(private repository: ICreateProductRepository) {}

  async execute(productData: Omit<Product, 'id'>): Promise<Product> {
    return this.repository.create(productData);
  }
}
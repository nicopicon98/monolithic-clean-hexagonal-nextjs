import { Product } from "../entities/product";

export interface ICreateProductRepository {
  create(product: Omit<Product, 'id'>): Promise<Product>;
}
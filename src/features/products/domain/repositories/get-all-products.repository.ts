import { Product } from "../entities/product";

export interface IGetAllProductsRepository {
  getAll(): Promise<Product[]>;
}
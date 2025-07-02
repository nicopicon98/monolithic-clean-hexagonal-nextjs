import { Product } from "../domain/entities/product";
import { IGetAllProductsRepository } from "../domain/repositories";

export class GetAllProductsUseCase {
  constructor(private repository: IGetAllProductsRepository) {}

  async execute(): Promise<Product[]> {
    return this.repository.getAll();
  }
}
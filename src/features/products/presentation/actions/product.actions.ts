'use server'

import { container, TYPES } from "@/features/products/di/container";
import { CreateProductUseCase } from "@/features/products/application/create-product.use-case";
import { Product } from "@/features/products/domain/entities/product";

export async function createProduct(productData: Omit<Product, 'id'>): Promise<Product> {
  const createProductUseCase = container.resolve<CreateProductUseCase>(TYPES.CreateProductUseCase);
  return await createProductUseCase.execute(productData);
}
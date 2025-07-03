import { Product } from "../../domain/entities/product";
import { IGetAllProductsRepository } from "../../domain/repositories";
import { ICreateProductRepository } from "../../domain/repositories/create-product.repository";

export class ProductRepository implements IGetAllProductsRepository, ICreateProductRepository {
  private API_URL: string;
  constructor() {
    this.API_URL = "http://localhost:3000/api/products";
  }

  async getAll(): Promise<Product[]> {
    const response = await fetch(this.API_URL);
    const { products } = await response.json();
    return products;
  }

  async create(productData: Omit<Product, 'id'>): Promise<Product> {
    // Simula comunicación con sistema externo (después será Prisma/DB)
    const newProduct: Product = {
      id: Math.floor(Math.random() * 10000),
      ...productData,
    };
    
    // Aquí irá la persistencia real con Prisma:
    // return await prisma.product.create({ data: productData });
    
    return newProduct;
  }
}
import { Product } from "../../domain/entities/product";
import { IGetAllProductsRepository } from "../../domain/repositories";
import { ICreateProductRepository } from "../../domain/repositories/create-product.repository";

export class ProductRepository implements IGetAllProductsRepository, ICreateProductRepository {
  private products: Product[] = [
    { id: 1, name: "Product cambio" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
  ];

  async getAll(): Promise<Product[]> {
    return [...this.products];
  }

  async create(productData: Omit<Product, 'id'>): Promise<Product> {
    const newProduct: Product = {
      id: this.products.length + 1,
      ...productData
    };
    
    this.products.push(newProduct);
    return newProduct;
  }
}
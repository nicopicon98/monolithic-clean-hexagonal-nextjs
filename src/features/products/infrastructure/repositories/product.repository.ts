import { Product } from "../../domain/entities/product";
import { IGetAllProductsRepository } from "../../domain/repositories";
import { ICreateProductRepository } from "../../domain/repositories/create-product.repository";

export class ProductRepository
  implements IGetAllProductsRepository, ICreateProductRepository
{
  private API_URL: string;
  constructor() {
    this.API_URL = "http://localhost:3000/api/products";
  }

  async getAll(): Promise<Product[]> {
    const response = await fetch(this.API_URL);
    const { products } = await response.json();
    return products;
  }

  async create(productData: Omit<Product, "id">): Promise<Product> {
    // const newProduct: Product = {
    //   id: this.products.length + 1,
    //   ...productData
    // };

    // this.products.push(newProduct);
    const newProduct: Product = {
      id: Math.floor(Math.random() * 10000), // Simulating ID generation
      ...productData,
    };
    return newProduct;
  }
}

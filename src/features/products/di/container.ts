import { DIContainer } from "@/shared/di";
import { ProductRepository } from "../infrastructure/repositories";
import { GetAllProductsUseCase } from "../application/get-all.use-case";
import { CreateProductUseCase } from "../application/create-product.use-case";
import { IGetAllProductsRepository, ICreateProductRepository } from "../domain/repositories";

// Símbolos para identificar servicios
export const TYPES = {
  // Repositories
  GetAllProductsRepository: Symbol.for("GetAllProductsRepository"),
  CreateProductRepository: Symbol.for("CreateProductRepository"),
  ProductRepository: Symbol.for("ProductRepository"),
  
  // Use Cases
  GetAllProductsUseCase: Symbol.for("GetAllProductsUseCase"),
  CreateProductUseCase: Symbol.for("CreateProductUseCase"),
} as const;

// Crear y configurar el contenedor
const container = new DIContainer();

// Registrar repositorio como singleton
container.registerSingleton(TYPES.ProductRepository, () => new ProductRepository());

// Registrar interfaces de repositorio que apuntan a la misma implementación
container.registerSingleton<IGetAllProductsRepository>(
  TYPES.GetAllProductsRepository, 
  () => container.resolve<ProductRepository>(TYPES.ProductRepository)
);

container.registerSingleton<ICreateProductRepository>(
  TYPES.CreateProductRepository, 
  () => container.resolve<ProductRepository>(TYPES.ProductRepository)
);

// Registrar casos de uso
container.registerTransient(
  TYPES.GetAllProductsUseCase,
  () => new GetAllProductsUseCase(
    container.resolve<IGetAllProductsRepository>(TYPES.GetAllProductsRepository)
  )
);

container.registerTransient(
  TYPES.CreateProductUseCase,
  () => new CreateProductUseCase(
    container.resolve<ICreateProductRepository>(TYPES.CreateProductRepository)
  )
);

export { container };
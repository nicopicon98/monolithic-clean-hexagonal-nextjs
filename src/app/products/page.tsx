import { container, TYPES } from "@/features/products/di/container";
import { GetAllProductsUseCase } from "@/features/products/application/get-all.use-case";

export default async function ProductsPage() {
  const getAllProductsUseCase = container.resolve<GetAllProductsUseCase>(TYPES.GetAllProductsUseCase);
  const products = await getAllProductsUseCase.execute();

  return (
    <div>
      <h1>Products Page</h1>
      <p>This is the products page.</p>
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

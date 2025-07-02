export default async function ProductsPage() {
  const getAllProducts = async () => {
    const response = await fetch("http://localhost:3000/api/products");
    console.log({ response });
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const { products } = await response.json();
    console.log({ products });
    products.forEach((product: any) => {
      console.log(product);
    });
    return products;
  };

  const products = await getAllProducts();

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

import { createProduct } from "@/features/products/presentation/actions/product.actions";

export default function CreateProductPage() {
  async function handleCreateProduct(formData: FormData) {
    'use server'
    
    const name = formData.get('name') as string;
    await createProduct({ name });
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Create Product</h1>
      <form action={handleCreateProduct} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Product
        </button>
      </form>
    </div>
  );
}
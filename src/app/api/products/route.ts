import { NextResponse } from "next/server";
import { GetAllProductsUseCase } from "@/features/products/application/get-all.use-case";
import { ProductRepository } from "@/features/products/infrastructure/repositories";

const products = [
  { id: 1, name: "Product cambio" },
  { id: 2, name: "Product 2" },
];

export async function GET() {
  return NextResponse.json({ products }, { status: 200 });
}

import { AppDataSource } from "../config/data-source";
import { Product } from "../entity/Product";
import { CreateProductDto } from "../dto/CreateProductDto";
import { UpdateProductDto } from "../dto/UpdateProductDto";

const productRepository = AppDataSource.getRepository(Product);

export async function createProduct(dto: CreateProductDto): Promise<Product> {
  const product = productRepository.create({
    name: dto.name,
    price: dto.price,
    stock: dto.stock ?? 0,
  });
  return productRepository.save(product);
}

export async function getAllProducts(): Promise<Product[]> {
  return productRepository.find();
}

export async function getProductById(id: number): Promise<Product | null> {
  return productRepository.findOneBy({ id });
}

export async function updateProduct(
  id: number,
  dto: UpdateProductDto
): Promise<Product | null> {
  const product = await productRepository.findOneBy({ id });
  if (!product) return null;

  Object.assign(product, dto);
  return productRepository.save(product);
}

export async function deleteProduct(id: number): Promise<boolean> {
  const result = await productRepository.delete(id);
  return (result.affected ?? 0) > 0;
}

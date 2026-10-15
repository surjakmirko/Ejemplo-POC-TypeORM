import { AppDataSource } from "../config/data-source";
import { Producto } from "../entity/Producto";
import { CreateProductoDto } from "../dto/CreateProductoDto";
import { UpdateProductoDto } from "../dto/UpdateProductoDto";

const productoRepository = AppDataSource.getRepository(Producto);

export async function crearProducto(dto: CreateProductoDto): Promise<Producto> {
  const product = productoRepository.create({
    nombre: dto.nombre,
    precio: dto.precio,
    stock: dto.stock ?? 0,
  });
  return productoRepository.save(product);
}

export async function getAllProductos(): Promise<Producto[]> {
  return productoRepository.find();
}

export async function getProductoPorId(id: number): Promise<Producto | null> {
  return productoRepository.findOneBy({ id });
}

export async function updateProducto(
  id: number,
  dto: UpdateProductoDto
): Promise<Producto | null> {
  const product = await productoRepository.findOneBy({ id });
  if (!product) return null;

  Object.assign(product, dto);
  return productoRepository.save(product);
}

export async function deleteProducto(id: number): Promise<boolean> {
  const result = await productoRepository.delete(id);
  return (result.affected ?? 0) > 0;
}

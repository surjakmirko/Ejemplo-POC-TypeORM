import { AppDataSource } from "../config/data-source";
import { TipoProducto } from "../entity/TipoProducto";
import { CreateTipoProductoDto } from "../dto/CreateTipoProductoDto";

const tipoRepository = AppDataSource.getRepository(TipoProducto);

export async function crearTipo(dto: CreateTipoProductoDto): Promise<TipoProducto> {
  const tipo = tipoRepository.create({ nombre: dto.nombre.trim() });
  return tipoRepository.save(tipo);
}

export async function getAllTipos(): Promise<TipoProducto[]> {
  return tipoRepository.find({ order: { nombre: "ASC" } });
}

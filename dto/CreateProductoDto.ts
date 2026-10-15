export interface CreateProductoDto {
  nombre: string;
  precio: number;
  stock?: number;
  tipoId: number;
}

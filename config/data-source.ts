import { DataSource } from "typeorm";
import { Producto } from "../entity/Producto";
import { TipoProducto } from "../entity/TipoProducto";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: true,
  entities: [Producto, TipoProducto],
});

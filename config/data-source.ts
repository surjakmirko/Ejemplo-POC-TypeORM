import { DataSource } from "typeorm";
import { Producto } from "../entity/Producto";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: true,
  entities: [Producto],
});

import { DataSource } from "typeorm";
import { Product } from "../entity/Product";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: false,
  entities: [Product],
});

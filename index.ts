import "reflect-metadata";
import path from "path";
import express from "express";
import { AppDataSource } from "./config/data-source";
import productoRoutes from "./routes/productoRoutes";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/products", productoRoutes);

AppDataSource.initialize().then(() => {
  app.listen(PORT, () => {;
  });
})

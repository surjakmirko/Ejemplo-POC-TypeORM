import "reflect-metadata";
import path from "path";
import express from "express";
import { AppDataSource } from "./config/data-source";
import productoRoutes from "./routes/productoRoutes";
import tipoProductoRoutes from "./routes/tipoProductoRoutes";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/products", productoRoutes);
app.use("/tipos", tipoProductoRoutes);

AppDataSource.initialize().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
  });
});

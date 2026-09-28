import "reflect-metadata";
import path from "path";
import express from "express";
import { AppDataSource } from "./config/data-source";
import productRoutes from "./routes/productRoutes";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/products", productRoutes);

AppDataSource.initialize().then(() => {
  app.listen(PORT, () => {;
  });
})

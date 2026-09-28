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
  console.log("Database connected");
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch((error) => console.error("Database connection failed:", error));

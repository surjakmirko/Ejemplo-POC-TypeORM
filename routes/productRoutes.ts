import { Router, Request, Response } from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../service/ProductService";

const router = Router();

router.get("/", async (_req: Request, res: Response) => {
  const products = await getAllProducts();
  res.json(products);
});

router.get("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const product = await getProductById(id);

  if (!product) {
    res.status(404).json({ message: "Producto no encontrado" });
    return;
  }

  res.json(product);
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const product = await createProduct(req.body);
    res.status(201).json(product);
  } catch (error: any) {
    res.status(400).json({ message: "Error al crear producto", error: error.message });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const product = await updateProduct(id, req.body);

  if (!product) {
    res.status(404).json({ message: "Producto no encontrado" });
    return;
  }

  res.json(product);
});

router.delete("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const deleted = await deleteProduct(id);

  if (!deleted) {
    res.status(404).json({ message: "Producto no encontrado" });
    return;
  }

  res.status(204).send();
});

export default router;

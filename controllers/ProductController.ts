import { Request, Response } from "express";
import * as ProductService from "../service/ProductService";

export async function getAll(_req: Request, res: Response) {
  const products = await ProductService.getAllProducts();
  res.json(products);
}

export async function getById(req: Request, res: Response) {
  const id = parseInt(req.params.id, 10);
  const product = await ProductService.getProductById(id);

  if (!product) {
    res.status(404).json({ message: "Producto no encontrado" });
    return;
  }

  res.json(product);
}

export async function create(req: Request, res: Response) {
  try {
    const product = await ProductService.createProduct(req.body);
    res.status(201).json(product);
  } catch (error: any) {
    res.status(400).json({ message: "Error al crear producto", error: error.message });
  }
}

export async function update(req: Request, res: Response) {
  const id = parseInt(req.params.id, 10);
  const product = await ProductService.updateProduct(id, req.body);

  if (!product) {
    res.status(404).json({ message: "Producto no encontrado" });
    return;
  }

  res.json(product);
}

export async function remove(req: Request, res: Response) {
  const id = parseInt(req.params.id, 10);
  const deleted = await ProductService.deleteProduct(id);

  if (!deleted) {
    res.status(404).json({ message: "Producto no encontrado" });
    return;
  }

  res.status(204).send();
}

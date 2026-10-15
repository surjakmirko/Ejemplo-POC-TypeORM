import { Request, Response } from "express";
import * as ProductoService from "../service/ProductoService";

export async function getAll(_req: Request, res: Response) {
  const products = await ProductoService.getAllProductos();
  res.json(products);
}

export async function getPorId(req: Request, res: Response) {
  const id = parseInt(req.params.id, 10);
  const product = await ProductoService.getProductoPorId(id);

  if (!product) {
    res.status(404).json({ message: "Producto no encontrado" });
    return;
  }

  res.json(product);
}

export async function create(req: Request, res: Response) {
  try {
    const product = await ProductoService.crearProducto(req.body);
    res.status(201).json(product);
  } catch (error: any) {
    res.status(400).json({ message: "Error al crear producto", error: error.message });
  }
}

export async function update(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id, 10);
    const product = await ProductoService.updateProducto(id, req.body);

    if (!product) {
      res.status(404).json({ message: "Producto no encontrado" });
      return;
    }

    res.json(product);
  } catch (error: any) {
    res.status(400).json({ message: "Error al actualizar producto", error: error.message });
  }
}

export async function remove(req: Request, res: Response) {
  const id = parseInt(req.params.id, 10);
  const deleted = await ProductoService.deleteProducto(id);

  if (!deleted) {
    res.status(404).json({ message: "Producto no encontrado" });
    return;
  }

  res.status(204).send();
}

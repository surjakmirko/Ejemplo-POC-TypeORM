import { Request, Response } from "express";
import * as TipoProductoService from "../service/TipoProductoService";

export async function getAll(_req: Request, res: Response) {
  const tipos = await TipoProductoService.getAllTipos();
  res.json(tipos);
}

export async function create(req: Request, res: Response) {
  try {
    if (!req.body?.nombre || !String(req.body.nombre).trim()) {
      res.status(400).json({ message: "El nombre del tipo es obligatorio" });
      return;
    }
    const tipo = await TipoProductoService.crearTipo(req.body);
    res.status(201).json(tipo);
  } catch (error: any) {
    res.status(400).json({ message: "Error al crear tipo", error: error.message });
  }
}

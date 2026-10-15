import { Router } from "express";
import * as TipoProductoController from "../controllers/TipoProductoController";

const router = Router();

router.get("/", TipoProductoController.getAll);
router.post("/", TipoProductoController.create);

export default router;

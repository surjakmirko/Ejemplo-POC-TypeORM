import { Router } from "express";
import * as ProductoController from "../controllers/ProductoController";

const router = Router();

router.get("/", ProductoController.getAll);
router.get("/:id", ProductoController.getPorId);
router.post("/", ProductoController.create);
router.put("/:id", ProductoController.update);
router.delete("/:id", ProductoController.remove);

export default router;

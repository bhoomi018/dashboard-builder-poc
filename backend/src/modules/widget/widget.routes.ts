import { Router } from "express";
import { fetchWidgetData } from "./widget.controller";

const router = Router();

router.get("/:type", fetchWidgetData);

export default router;

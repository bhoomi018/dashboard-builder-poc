import { Request, Response } from "express";
import { getWidgetData } from "./widget.service";

export function fetchWidgetData(req: Request, res: Response) {
  const { type } = req.params;

  const data = getWidgetData(type);

  res.json({
    success: true,
    data
  });
}

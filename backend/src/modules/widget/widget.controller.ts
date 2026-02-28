import { Request, Response, NextFunction } from "express";
import { getWidgetData } from "./widget.service";
import {
  BarSchema,
  LineSchema,
  ScatterSchema,
  TreeSchema
} from "./widget.schema";
import { WidgetTypes } from "../../constants/widgetTypes";

export function fetchWidgetData(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { type } = req.params;

    const data = getWidgetData(type);

    // Validate based on type
    switch (type) {
      case WidgetTypes.BAR:
        BarSchema.parse(data);
        break;
      case WidgetTypes.LINE:
        LineSchema.parse(data);
        break;
      case WidgetTypes.SCATTER:
        ScatterSchema.parse(data);
        break;
      case WidgetTypes.TREE:
        TreeSchema.parse(data);
        break;
    }

    res.status(200).json({
      success: true,
      data
    });
  } catch (error) {
    next(error);
  }
}

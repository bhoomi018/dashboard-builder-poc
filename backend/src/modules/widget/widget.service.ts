import { generateMockData } from "../../utils/mockDataGenerator";
import { WidgetTypes } from "../../constants/widgetTypes";

export function getWidgetData(type: string) {
  const validTypes = Object.values(WidgetTypes);

  if (!validTypes.includes(type as any)) {
    throw new Error("Invalid widget type");
  }

  return generateMockData(type);
}

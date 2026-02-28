import { WidgetTypes } from "../constants/widgetTypes";

export function generateMockData(type: string) {
  switch (type) {
    case WidgetTypes.BAR:
      return [
        { label: "Jan", value: 100 },
        { label: "Feb", value: 200 },
        { label: "Mar", value: 150 }
      ];

    case WidgetTypes.LINE:
      return [
        { date: "2024-01-01", value: 50 },
        { date: "2024-02-01", value: 80 },
        { date: "2024-03-01", value: 120 }
      ];

    case WidgetTypes.SCATTER:
      return [
        { x: 10, y: 20 },
        { x: 15, y: 35 },
        { x: 25, y: 10 }
      ];

    case WidgetTypes.TREE:
      return {
        name: "Company",
        children: [
          { name: "Engineering" },
          { name: "Marketing" }
        ]
      };

    default:
      return [];
  }
}

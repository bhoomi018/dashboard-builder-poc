export const WidgetTypes = {
  BAR: "bar",
  LINE: "line",
  SCATTER: "scatter",
  TREE: "tree"
} as const;

export type WidgetType =
  | typeof WidgetTypes.BAR
  | typeof WidgetTypes.LINE
  | typeof WidgetTypes.SCATTER
  | typeof WidgetTypes.TREE;

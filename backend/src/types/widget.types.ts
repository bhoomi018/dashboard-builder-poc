export interface BarData {
  label: string;
  value: number;
}

export interface LineData {
  date: string;
  value: number;
}

export interface ScatterData {
  x: number;
  y: number;
}

export interface TreeNode {
  name: string;
  children?: TreeNode[];
}

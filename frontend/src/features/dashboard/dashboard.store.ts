import { create } from "zustand";

interface Widget {
  id: string;
  type: string;
}

interface DashboardState {
  widgets: Widget[];
  layout: any[];
  addWidget: (type: string) => void;
  setLayout: (layout: any[]) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  widgets: [],
  layout: JSON.parse(localStorage.getItem("layout") || "[]"),

  addWidget: (type: string) =>
    set((state) => ({
      widgets: [
        ...state.widgets,
        { id: crypto.randomUUID(), type }
      ]
    })),

  setLayout: (layout) => {
    localStorage.setItem("layout", JSON.stringify(layout));
    set({ layout });
  }
}));

import { useDashboardStore } from "./dashboard.store";
import WidgetContainer from "./WidgetContainer";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

function DashboardShell() {
  const { widgets, addWidget, layout, setLayout } = useDashboardStore();

  const defaultLayout = widgets.map((widget, index) => ({
    i: widget.id,
    x: (index % 2) * 6,
    y: Math.floor(index / 2) * 4,
    w: 6,
    h: 4
  }));

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => addWidget("bar")}>Add Bar</button>
        <button onClick={() => addWidget("line")}>Add Line</button>
        <button onClick={() => addWidget("scatter")}>Add Scatter</button>
        <button onClick={() => addWidget("tree")}>Add Tree</button>
      </div>

      <GridLayout
        className="layout"
        layout={layout.length ? layout : defaultLayout}
        cols={12}
        rowHeight={80}
        width={1200}
        onLayoutChange={(newLayout) => setLayout(newLayout)}
      >
        {widgets.map((widget) => (
          <div key={widget.id}>
            <WidgetContainer type={widget.type} />
          </div>
        ))}
      </GridLayout>
    </div>
  );
}

export default DashboardShell;

import BarChartWidget from "../../components/widgets/BarChartWidget";
import LineChartWidget from "../../components/widgets/LineChartWidget";
import ScatterWidget from "../../components/widgets/ScatterWidget";
import TreeWidget from "../../components/widgets/TreeWidget";

export const widgetRegistry: Record<string, any> = {
  bar: BarChartWidget,
  line: LineChartWidget,
  scatter: ScatterWidget,
  tree: TreeWidget
};

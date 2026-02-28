import { widgetRegistry } from "./widgetRegistry";
import ErrorBoundary from "../../components/ErrorBoundary";

interface Props {
  type: string;
}

function WidgetContainer({ type }: Props) {
  const Component = widgetRegistry[type];

  if (!Component) {
    return <div>Invalid Widget</div>;
  }

  return (
    <ErrorBoundary>
      <div style={{ background: "#fff", padding: "10px", borderRadius: "8px" }}>
        <Component />
      </div>
    </ErrorBoundary>
  );
}

export default WidgetContainer;

import { useEffect, useState } from "react";
import { fetchWidgetData } from "../../services/api";

function TreeWidget() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchWidgetData("tree").then(setData);
  }, []);

  return (
    <div>
      <h3>Tree Structure</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default TreeWidget;

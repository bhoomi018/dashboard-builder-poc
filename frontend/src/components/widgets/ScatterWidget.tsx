import { useEffect, useState } from "react";
import { fetchWidgetData } from "../../services/api";
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function ScatterWidget() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetchWidgetData("scatter").then(setData);
  }, []);

  return (
    <div style={{ height: 300 }}>
      <h3>Scatter Plot</h3>
      <ResponsiveContainer width="100%" height="90%">
        <ScatterChart>
          <XAxis dataKey="x" />
          <YAxis dataKey="y" />
          <Tooltip />
          <Scatter data={data} fill="#ff7300" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ScatterWidget;

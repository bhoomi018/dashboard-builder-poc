import { useEffect, useState } from "react";
import { fetchWidgetData } from "../../services/api";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function LineChartWidget() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetchWidgetData("line").then(setData);
  }, []);

  return (
    <div style={{ height: 300 }}>
      <h3>Line Chart</h3>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChartWidget;

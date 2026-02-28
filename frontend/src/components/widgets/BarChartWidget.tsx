import { useEffect, useState } from "react";
import { fetchWidgetData } from "../../services/api";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function BarChartWidget() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetchWidgetData("bar").then(setData);
  }, []);

  return (
    <div style={{ height: 300 }}>
      <h3>Bar Chart</h3>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartWidget;

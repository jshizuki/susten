import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Label,
} from "recharts";
// CSS

function PieChartForSusten({ portfolioData }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={portfolioData}
          cx="50%"
          cy="50%"
          innerRadius={100}
          outerRadius={123}
          // fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
        >
          <Label value="資産クラス別の割合" position="center" />
          {portfolioData.map((data, index) => (
            <Cell key={`cell-${index}`} fill={data.bulletcolor} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default PieChartForSusten;

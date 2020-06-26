import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function ExpenseGraph({ data }) {
  console.log(data);
  return (
    <LineChart
      width={350}
      height={270}
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 2" />
      <XAxis />
      <YAxis />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="profit"
        stroke="#f3626c"
        strokeWidth="4"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="loss" strokeWidth="4" stroke="#5feca9" />
    </LineChart>
  );
}

export default ExpenseGraph;

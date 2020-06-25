import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data01 = [
  { x: 10, y: 30 },
  { x: 30, y: 200 },
  { x: -45, y: 100 },
  { x: 50, y: 400 },
  { x: -70, y: 150 },
  { x: 100, y: 250 },
];
const data02 = [
  { x: 30, y: 20 },
  { x: 50, y: 180 },
  { x: 75, y: 240 },
  { x: 100, y: 100 },
  { x: 120, y: 190 },
];

function ExpenseGraph() {
  return (
    <ScatterChart
      width={300}
      height={270}
      margin={{
        top: 5,
        right: 0,
        bottom: 5,
        left: 0,
      }}
    >
      <CartesianGrid x="5" y="5" />
      <XAxis
        type="number"
        padding={{ left: 50 }}
        dataKey="x"
        name="stature"
        unit="cm"
        orientation="top"
      />
      <YAxis type="number" dataKey="y" name="weight" unit="kg" />
      <ZAxis type="number" range={[100]} />
      <Tooltip cursor={{ strokeDasharray: "4 4" }} />
      <Legend />
      <Scatter
        name="A school"
        data={data01}
        fill="#f3626c"
        line={{ strokeWidth: 3 }}
        lineJointType="monotoneX"
      />
      <Scatter
        name="B school"
        line={{ strokeWidth: 3 }}
        data={data02}
        fill="#5feca9"
        lineJointType="monotoneX"
      />
    </ScatterChart>
  );
}

export default ExpenseGraph;

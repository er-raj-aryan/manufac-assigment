import React from "react";
import "./App.css";
import ReactECharts from "echarts-for-react";

function App() {
  const ChartOptions = [
    {
      grid: { top: 8, right: 8, bottom: 24, left: 36 },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          smooth: true,
        },
      ],
      tooltip: {
        trigger: "axis",
      },
    },
    {
      grid: { top: 8, right: 8, bottom: 24, left: 36 },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "bar",
          smooth: true,
        },
      ],
      tooltip: {
        trigger: "axis",
      },
    },
  ];

  return (
    <div className="App">
      {ChartOptions.map((options) => (
        <div>
          <h1>{options.series[0].type.toUpperCase()}</h1>
          <ReactECharts option={options} />
        </div>
      ))}
    </div>
  );
}
export default App;

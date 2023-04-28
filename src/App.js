import React from "react";
import "./App.css";
import ReactECharts from "echarts-for-react";
import WineData from "./Data/Wine-Data.json";

function App() {
  const ChartOptions = [
    {
      title: "Line Chart",
      xAxisLabel: "Flavanoids",
      yAxisLabel: "Ash",
      option: {
        grid: { top: 8, right: 8, bottom: 24, left: 36 },
        xAxis: {
          type: "category",
          data: getValueFlavanoids(),
        },
        yAxis: {
          type: "value",
          data: getValueAsh(),
        },
        series: [
          {
            data: getValueFlavanoids(),
            type: "line",
            smooth: true,
          },
          {
            data: getValueAsh(),
            type: "line",
            smooth: true,
          },
        ],
        tooltip: {
          trigger: "axis",
        },
      },
    },
    {
      title: "Bar Chart",
      xAxisLabel: "Alcohol",
      yAxisLabel: "Magnesium",
      option: {
        grid: { top: 8, right: 8, bottom: 24, left: 36 },
        xAxis: {
          type: "category",
          data: getValueAlcohol(),
        },
        yAxis: {
          type: "value",
          data: getValueMagnesium(),
        },
        series: [
          {
            data: getValueAlcohol(),
            type: "bar",
            smooth: true,
          },
          {
            data: getValueMagnesium(),
            type: "bar",
            smooth: true,
          },
        ],
        tooltip: {
          trigger: "axis",
        },
      },
    },
  ];

  function getValueFlavanoids() {
    return WineData.map((e) => {
      return e.Flavanoids;
    });
  }
  function getValueAsh() {
    return WineData.map((e) => {
      return e.Ash;
    });
  }

  function getValueAlcohol() {
    return WineData.map((e) => {
      return e.Alcohol;
    });
  }
  function getValueMagnesium() {
    return WineData.map((e) => {
      return e.Magnesium;
    });
  }

  return (
    <div className="App">
      {ChartOptions.map((options) => (
        <div className="mainContainer">
          <p className="yAxisLabel">{options.yAxisLabel}</p>
          <div className="chartContainer">
            <h2 className="chartType">{options.title}</h2>
            <ReactECharts option={options.option} />
            <p className="xAxisLabel">{options.xAxisLabel}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default App;

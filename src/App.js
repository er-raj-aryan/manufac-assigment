import React from "react";
import "./App.css";
import ReactECharts from "echarts-for-react";
import * as ChartHelper from './utils/chartOptionsHelper';

function App() {
  const ChartOptions = [
    // Line chart options which help to where xAxis represent for Alcohol and yAxis represent for Magnesium
    {
      title: "Line Chart",
      xAxisLabel: "Flavanoids",
      yAxisLabel: "Ash",
      option: ChartHelper.GetChartOption(ChartHelper.GetValuesFromWineData('Flavanoids'),ChartHelper.GetValuesFromWineData('Ash'),'line'),
    },
    // Bar chart options which help to where xAxis represent for Alcohol and yAxis represent for Magnesium
    {
      title: "Bar Chart",
      xAxisLabel: "Alcohol",
      yAxisLabel: "Magnesium",
      option: ChartHelper.GetChartOption(ChartHelper.GetValuesFromWineData('Alcohol'),ChartHelper.GetValuesFromWineData('Magnesium'),'bar'),
    }
  ];

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

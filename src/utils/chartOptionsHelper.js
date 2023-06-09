// Helper that simplifies code complexity and aids in software development. This tool is designed as a standalone application and can be easily managed separately from the main software.
import WineData from "../Data/Wine-Data.json";

export function GetChartOption(
  pXAxisValue,
  pYAxisValue,
  pChartType,
  isYaxisValueRequired = false
) {
  const option = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: "category",
      data: pXAxisValue,
    },
    yAxis: {
      type: "value",
      data: pYAxisValue,
    },
    series: isYaxisValueRequired
      ? [
          {
            data: pXAxisValue,
            type: pChartType,
            smooth: true,
          },
          {
            data: pYAxisValue,
            type: pChartType,
            smooth: true,
          },
        ]
      : [
          {
            data: pXAxisValue,
            type: pChartType,
            smooth: true,
          },
        ],
    tooltip: {
      trigger: "axis",
    },
  };

  return option;
}

export function GetValuesFromWineData(pItem) {
  if (pItem) {
    // get values from Wine Data set
    const wineDataValue = WineData.map((e) => {
      return e[pItem];
    })
    // remove the duplication value from result array
    const result = [...new Set(wineDataValue)];
    return result;
  }
}

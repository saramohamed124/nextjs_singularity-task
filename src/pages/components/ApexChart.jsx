import React, { useState } from "react";
import Chart from "react-apexcharts"; // Change import name from "ApexChart" to "Chart"

function ChartComponent() { // Change function name to avoid naming conflicts
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  });

  return (
    <div className="Chart">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="500"
          />
        </div>
      </div>
    </div>
  );
}

export default ChartComponent; // Rename the export to avoid naming conflicts

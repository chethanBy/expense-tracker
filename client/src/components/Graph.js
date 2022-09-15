import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import Label from "./Label";
import { chart_Data, getTotal } from "../helper/helper";
import { apiSlice as api } from "../store/apiSlice";

Chart.register(ArcElement);

const Graph = () => {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
  let graphData;

  if (isFetching) {
    graphData = <div>Fetching</div>;
  } else if (isSuccess) {
    if (getTotal(data) === 0) {
      const data = {
        data: {
          datasets: [
            {
              data: [300, 50, 100],
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
              ],
              hoverOffset: 4,
              borderRadius: 10,
              spacing: 1,
            },
          ],
        },
        options: {
          cutout: 115,
        },
      };
      graphData = <Doughnut {...data}></Doughnut>;
    } else {
      graphData = <Doughnut {...chart_Data(data)}></Doughnut>;
    }
    const total = getTotal(data);
  } else if (isError) {
    graphData = <div>Error</div>;
  }
  return (
    <div className="flex flex-col justify-center max-w-xs mx-auto pt-6">
      <div className="item">
        <div className="chart relative">
          {graphData}
          <h3 className="mb-4 font-bold title">
            Total
            <span className="block text-3xl text-emerald-400">
              ${getTotal(data) ?? 0}
            </span>
          </h3>
        </div>
      </div>
      <div className="flex flex-col py-10 gap-4">
        {/* Labels */}
        <Label></Label>
      </div>
    </div>
  );
};

export default Graph;

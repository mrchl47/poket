"use client";
import ChartDataLabels from "chartjs-plugin-datalabels";
import React from "react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  TimeScale,
  RadialLinearScale,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import useRadarChart from "@/hooks/useRadarChart";
Chart.register(ChartDataLabels);
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadialLinearScale,
  TimeScale,
  Title,
  Filler,
  Tooltip,
  Legend
);

const Task1 = () => {
  const { data, options, ShadowPlugin } = useRadarChart();
  return (
    <>
      <div
        className={`bg-white max-w-screen-lg flex justify-center items-center w-full md:w-[800px] md:h-[800px]`}
      >
        <Radar
          plugins={[ChartDataLabels, ShadowPlugin]}
          data={data}
          options={options}
        />
      </div>
    </>
  );
};

export default Task1;

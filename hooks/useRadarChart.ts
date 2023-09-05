const useRadarChart = () => {
  const ShadowPlugin = {
    id: "shadow",
    beforeDatasetsDraw: function (chart: any) {
      const { ctx } = chart;
      ctx.shadowColor = "rgba(0, 0, 0, 0.15)";
      ctx.shadowBlur = 10;
    },
  };
  const data = {
    labels: [
      "Transmission",
      "Stuffines",
      "Discomfort",
      "Humidity",
      "Pollution",
      "Temperature",
      "CO2",
      "Density",
    ],
    datasets: [
      {
        backgroundColor: "rgba(136, 155, 240, .6)",
        pointRadius: 1,
        borderWidth: 0,
        data: [130, 40, 105, 110, 60, 105, 95, 65],
        fill: "origin",
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowBlur: 40,
      },
      {
        backgroundColor: "rgba(136, 155, 240, .9)",
        pointRadius: 1,
        borderWidth: 0,
        data: [90, 20, 40, 90, 30, 50, 70, 100],
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowBlur: 40,
      },
      {
        backgroundColor: "#cec4bc",
        pointRadius: 0,
        borderWidth: 0,
        data: [60, 60, 60, 60, 60, 60, 60, 60],
      },
      {
        backgroundColor: "#dfd1cb60",
        pointRadius: 0,
        borderWidth: 2,
        borderColor: "#97979790",
        data: [90, 90, 90, 90, 90, 90, 90, 90],
      },
      {
        backgroundColor: "#e7ddd860",
        pointRadius: 0,
        borderColor: "#97979780",
        borderWidth: 2,
        data: [120, 120, 120, 120, 120, 120, 120, 120],
      },
      {
        backgroundColor: "#e9e8e860",
        pointRadius: 0,
        borderColor: "#97979770",
        borderWidth: 2,
        data: [150, 150, 150, 150, 150, 150, 150, 150],
      },
      {
        backgroundColor: "#ffffff60",
        pointRadius: 9,
        pointBackgroundColor: "#d8d8d8",
        borderColor: "#97979750",
        borderWidth: 2,
        data: [180, 180, 180, 180, 180, 180, 180, 180],
      },
    ],
  };
  const options = {
    layout: {
      padding: 100,
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
      datalabels: {
        font: {
          size: 30,
        },
        align: "start",
        offset: function (ctx: any) {
          // couldn't really find any good solution for rotating labels here, there's a plugin for chart js but it doesnt seem to support radar charts yet.
          switch (ctx.dataIndex) {
            case 0:
              return -90;
            case 1:
              return -160;
            case 2:
              return -90;
            case 3:
              return -160;
            case 4:
              return -90;
            case 5:
              return -160;
            case 6:
              return -90;
            case 7:
              return -160;
          }
        },

        rotation: function (ctx: any) {
          switch (ctx.dataIndex) {
            case 0:
              return 0;
            case 1:
              return 45;
            case 2:
              return 90;
            case 3:
              return 135;
            case 4:
              return 180;
            case 5:
              return 225;
            case 6:
              return 270;
            case 7:
              return 315;
          }
          return ctx.dataset.data[ctx.dataIndex]?.d;
        },

        formatter: function (value: number | string, context: any) {
          if (value !== 180) {
            return "";
          }
          return context.chart.data.labels[context.dataIndex];
        },
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      r: {
        angleLines: {
          color: "#000000",
          lineWidth: 2,
        },
        ticks: {
          stepSize: 30,
          display: false,
        },
        pointLabels: {
          display: false,
        },
      },
    },
  };
  return {
    data,
    ShadowPlugin,
    options,
  };
};
export default useRadarChart;

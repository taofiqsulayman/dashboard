import Chart from "react-apexcharts";
import { useState } from "react";

const ChartArea = () => {
  const [values, setValues] = useState({
    options: {
      chart: {
        id: "basic-bar",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: [
          "Dec 2",
          "Dec 3",
          "Dec 4",
          "Dec 5",
          "Dec 6",
          "Dec 7",
          "Dec 8",
          "Dec 9",
        ],
        labels: {
          style: {
            fontFamily: "Gilroy-SemiBold",
            fontSize: "9px",
            lineHeight: "9px",
            color: "#A5B4CB",
          },
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        min: 0,
        range: 10000,
        tickAmount: 5,

        labels: {
          formatter: function (value) {
            if (value >= 1000) {
              return `${Math.round((value / 1000) * 10) / 1}k`;
            }
            return value.toString();
          },
          style: {
            fontFamily: "Gilroy-SemiBold",
            fontSize: "10px",
            lineHeight: "9px",
            color: "#A5B4CB",
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 1.5,
        dashArray: 0,
      },
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          return `<div class="w-auto h-11 p-2 rounded-md bg-[#141736]">
          <div class="flex items-center gap-2">
            <ArrowDownTrayIcon class="h-4 w-4 text-gray-500" />
            <span class="text-[#868799] font-semibold text-xs">income</span>
          </div>
          <span class="font-bold text-xs text-white">
            $ ${series[seriesIndex][dataPointIndex]}
          </span>
        </div>`;
        },
      },
      grid: {
        strokeDashArray: 5,
        position: "back",
      },
    },
    series: [
      {
        name: "income",
        data: [5000, 10000, 5000, 30000, 25000, 40000, 50000, 10000],
      },
    ],
  });

  return (
    <div className="w-full">
      <Chart
        options={values.options}
        series={values.series}
        type="area"
        width="100%"
        height="250"
      />
    </div>
  );
};

export default ChartArea;

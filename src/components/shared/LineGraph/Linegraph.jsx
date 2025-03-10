import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  LineController,
} from "chart.js";

// Register chart.js components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  LineController,
);

const Line_Graph = (props) => {
  console.log(props);
  const chartRef = useRef(null); // Ref to the chart canvas

  const data = {
    labels: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
    datasets: [
      {
        label: props.label1,
        data: props.data1,
        borderColor: "rgba(249, 75, 101, 1)",
        pointRadius: 2.5,
        pointHoverRadius: 0,
        borderWidth: 2,
      },
      {
        label: props.label2,
        data: props.data2,
        borderColor: "rgba(205, 133, 63, 1)",
        pointRadius: 2.5,
        pointHoverRadius: 1,
        borderWidth: 2,
      },
      {
        label: props.label3,
        data: props.data3,
        borderColor: "rgba(111, 111, 112, 1)",
        pointRadius: 2.5,
        pointHoverRadius: 1,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: function () {
            return ""; // Empty title to remove the title part
          },
          header: function () {
            return "";
          },
          label: function (context) {
            const datasets = context.chart.data.datasets; // All datasets

            // Retrieve all values for the current index
            const allValues = datasets.map((dataset, i) => {
              const datasetLabel = dataset.label || "Unknown";
              const value = dataset.data[i];
              return `${datasetLabel}    ${value}`;
            });

            // Combine total and individual dataset values
            const total = allValues.reduce((sum, value) => {
              const valueParts = value.split("   ");
              return sum + Number(valueParts[1]);
            }, 0);

            // Return the formatted result with total
            return [`Total Alerts: ${total}`, ...allValues];
          },
          footer: function (tooltipItems) {
            return ""; // You can leave footer empty or add extra information if needed
          },
          backgroundColor: "rgba(0, 0, 0, 0.8)", // Tooltip background color
          borderColor: "rgba(0, 0, 0, 0)", // Make the border transparent (remove the box)
          borderWidth: 0, // Remove the border width
          padding: 10, // Adjust padding as needed (optional)
          displayColors: false, // Disable the color box next to each label
          caretSize: 0, // Optionally remove the caret (arrow) of the tooltip
        },
        backgroundColor: "rgba(0, 0, 0, 0.8)", // Tooltip background color
        borderColor: "rgba(0, 0, 0, 0)", // Make the border transparent (remove the box)
        borderWidth: 0, // Remove the border width
        padding: 10, // Adjust padding as needed (optional)
        displayColors: false, // Disable the color box next to each label
        caretSize: 0,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Count",
        },
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    let myChart;

    if (chartRef.current) {
      myChart = new ChartJS(chartRef.current, {
        type: "line",
        data: data,
        options: options,
      });
    }

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [data, options]);

  return (
    <div className="p-2 graph-table">
      <div className="graph-table-title">
        <div className="font-serif text-xs font-semibold leading-[16.8px] tracking-[0.32rem] text-left text-[rgba(156,156,156,1)]">
          # DTC TRACKER
        </div>
        <div className="d-flex gap-20 align-items-center">
          <div className="d-flex gap-10">
            <div className="d-flex align-items-center gap-10">
              <hr
                className="graph-table-label"
                style={{ backgroundColor: "rgba(249, 75, 101, 1)" }}
              />
              <span>{props.label1}</span>
            </div>
            <div className="d-flex align-items-center gap-10">
              <hr
                className="graph-table-label"
                style={{ backgroundColor: "rgba(205, 133, 63, 1)" }}
              />
              <span>{props.label2}</span>
            </div>
            <div className="d-flex align-items-center gap-10">
              <hr
                className="graph-table-label"
                style={{ backgroundColor: "rgba(111, 111, 112, 1)" }}
              />
              <span>{props.label3}</span>
            </div>
          </div>
          <div>
            <select
              className="w-max text-sm font-medium leading-4 font-montserrat border-none bg-transparent"
              value={props.selectedOpt}
              onChange={(e) => props.handleSelectChange(e.target.value)}
            >
              <option className="bg-transparent" value="graphs">
                View by Records
              </option>
              <option value="record">View By Charts</option>
            </select>
          </div>
        </div>
      </div>
      {/* Use a canvas element for chart.js */}
      <canvas ref={chartRef} style={{ width: "35rem" }} />
    </div>
  );
};

export default Line_Graph;

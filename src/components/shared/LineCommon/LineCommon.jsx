"use client";
import React, { useState } from "react";
import Line_table from "../LineTable/Linetable";
import Line_Graph from "../LineGraph/Linegraph";

const Line_Common = () => {
  const [selectedOpt, setSelectedOpt] = useState("graphs");
  const handleSelectChange = (value) => {
    setSelectedOpt(value);
  };
  const data1 = [10, 15, 30, 25, 20, 25, 55, 45, 64, 53, 78, 32];
  const data2 = [20, 25, 40, 35, 30, 45, 32, 76, 34, 62, 86, 12];
  const data3 = [5, 45, 10, 85, 20, 95, 5, 9, 30, 90, 20, 45, 55];
  const label1 = "D0";
  const label2 = "D1";
  const label3 = "D2";
  console.log(selectedOpt);
  return (
    <div>
      <div>
        {selectedOpt == "graphs" && (
          <Line_table
            data1={data1}
            data2={data2}
            data3={data3}
            label1={label1}
            label2={label2}
            label3={label3}
            selectedOpt={selectedOpt}
            handleSelectChange={handleSelectChange}
          />
        )}
        {selectedOpt == "record" && (
          <Line_Graph
            data1={data1}
            data2={data2}
            data3={data3}
            label1={label1}
            label2={label2}
            label3={label3}
            selectedOpt={selectedOpt}
            handleSelectChange={handleSelectChange}
          />
        )}
      </div>
    </div>
  );
};

export default Line_Common;

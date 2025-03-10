import React from "react";

const Line_table = (props) => {
  console.log(props);
  const tableHeaders = {
    c1: "Open",
    c2: "Pending",
    c3: "on Customer",
    c4: "on Third Party",
    c5: "for Part",
  };
  const tableData = [
    { label: "D0", values: [20, 30, 25, 10, 5] },
    { label: "D1", values: [15, 25, 30, 20, 10] },
    { label: "D2", values: [15, 25, 30, 20, 10] },
  ];
  const dtc0 = {
    open: "20",
    pending: "30",
    oncus: "25",
    onthird: "10",
    forpat: "5",
  };
  const dtc1 = {
    open: "15",
    pending: "25",
    oncus: "30",
    onthird: "20",
    forpat: "10",
  };
  const dtc2 = {
    open: "15",
    pending: "25",
    oncus: "30",
    onthird: "20",
    forpat: "10",
  };

  return (
    <div className="graph-table">
      <div className="graph-table-title" style={{ background: "transparent" }}>
        <div className="font-serif text-xs font-semibold leading-[16.8px] tracking-[0.32rem] text-left text-[rgba(156,156,156,1)]">
          # DTC TRACKER
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

      {/* Table with border-spacing and padding */}
      <div className="table" style={{ borderSpacing: "8px" }}>
        {/* header */}
        <div
          className="flex w-full pt-4 pb-4"
          style={{
            color: "rgba(140, 140, 140, 1)",
            borderBottom: "3px solid rgba(50, 50, 50, 1)",
          }}
        >
          <div className="font-montserrat w-[13%] text-[0.875rem] p-2"></div>
          <div className="font-montserrat w-[13%] text-[0.875rem] p-2">
            {tableHeaders.c1}
          </div>
          <div className="font-montserrat w-[17%] text-[0.875rem] p-2">
            {tableHeaders.c2}
          </div>
          <div className="font-montserrat w-[20%] text-[0.875rem] p-2">
            {tableHeaders.c3}
          </div>
          <div className="font-montserrat w-[24%] text-[0.875rem] p-2">
            {tableHeaders.c4}
          </div>
          <div className="font-montserrat w-[13%] text-[0.875rem] p-2">
            {tableHeaders.c5}
          </div>
        </div>

        {/* D0 row */}
        <div
          className="flex pt-4 pb-4"
          style={{ borderBottom: "3px solid rgba(50, 50, 50, 1)" }}
        >
          <div
            className="font-montserrat w-[13%] text-[0.875rem] p-2"
            style={{ color: "rgba(140, 140, 140, 1)" }}
          >
            D0(71)
          </div>
          <div className="font-montserrat w-[13%] text-[0.875rem] p-2">
            {dtc0.open}
          </div>
          <div className="font-montserrat w-[17%] text-[0.875rem] p-2">
            {dtc0.pending}
          </div>
          <div className="font-montserrat w-[20%] text-[0.875rem] p-2">
            {dtc0.oncus}
          </div>
          <div className="font-montserrat w-[24%] text-[0.875rem] p-2">
            {dtc0.onthird}
          </div>
          <div className="font-montserrat w-[13%] text-[0.875rem] p-2">
            {dtc0.forpat}
          </div>
        </div>

        {/* D1 row */}
        <div
          className="flex pt-4 pb-4"
          style={{ borderBottom: "3px solid rgba(50, 50, 50, 1)" }}
        >
          <div
            className="font-montserrat w-[13%] text-[0.875rem] p-2"
            style={{ color: "rgba(140, 140, 140, 1)" }}
          >
            D1(43)
          </div>
          <div className="font-montserrat w-[13%] text-[0.875rem] p-2">
            {dtc1.open}
          </div>
          <div className="font-montserrat w-[17%] text-[0.875rem] p-2">
            {dtc1.pending}
          </div>
          <div className="font-montserrat w-[20%] text-[0.875rem] p-2">
            {dtc1.oncus}
          </div>
          <div className="font-montserrat w-[24%] text-[0.875rem] p-2">
            {dtc1.onthird}
          </div>
          <div className="font-montserrat w-[13%] text-[0.875rem] p-2">
            {dtc1.forpat}
          </div>
        </div>

        {/* D2 row */}
        <div className="flex pt-4 pb-4">
          <div
            className="font-montserrat w-[13%] text-[0.875rem] p-2"
            style={{ color: "rgba(140, 140, 140, 1)" }}
          >
            D2(45)
          </div>
          <div className="font-montserrat w-[13%] text-[0.875rem] p-2">
            {dtc2.open}
          </div>
          <div className="font-montserrat w-[17%] text-[0.875rem] p-2">
            {dtc2.pending}
          </div>
          <div className="font-montserrat w-[20%] text-[0.875rem] p-2">
            {dtc2.oncus}
          </div>
          <div className="font-montserrat w-[24%] text-[0.875rem] p-2">
            {dtc2.onthird}
          </div>
          <div className="font-montserrat w-[13%] text-[0.875rem] p-2">
            {dtc2.forpat}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Line_table;

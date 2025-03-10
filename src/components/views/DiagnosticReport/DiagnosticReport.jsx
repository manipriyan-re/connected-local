import TableDelete from "@/components/shared/TableDelete/TableDelete";

const tableJSONData = {
  tableData: [
    {
      column1: "Row 1, Col 1",
      column2: "Row 1, Col 2",
      column3: "Row 1, Col 3",
      column4: "Row 1, Col 4",
    },
    {
      column1: "Row 2, Col 1",
      column2: "Row 2, Col 2",
      column3: "Row 2, Col 3",
      column4: "Row 2, Col 4",
    },
    {
      column1: "Row 3, Col 1",
      column2: "Row 3, Col 2",
      column3: "Row 3, Col 3",
      column4: "Row 3, Col 4",
    },
    {
      column1: "Row 4, Col 1",
      column2: "Row 4, Col 2",
      column3: "Row 4, Col 3",
      column4: "Row 4, Col 4",
    },
    {
      column1: "Row 5, Col 1",
      column2: "Row 5, Col 2",
      column3: "Row 5, Col 3",
      column4: "Row 5, Col 4",
    },
    {
      column1: "Row 6, Col 1",
      column2: "Row 6, Col 2",
      column3: "Row 6, Col 3",
      column4: "Row 6, Col 4",
    },
    {
      column1: "Row 7, Col 1",
      column2: "Row 7, Col 2",
      column3: "Row 7, Col 3",
      column4: "Row 7, Col 4",
    },
  ],
};

const headerData = ["Parameter", "Value", "Column 3", "Column 4", "Action"];

const DiagnosticReport = () => {
  return (
    <div className="diagnostic_report_container">
      <div className="diagnostic_report_header_container">
        <div className="diagnostic_report_vehicle_health"></div>
        <div className="diagnostic_report_vehicle_search"></div>
      </div>
      <div className="diagnostic_report_table_container">
        <TableDelete
          showDelete={true}
          tableData={tableJSONData}
          headerData={headerData}
        />
      </div>
      <div className="bottom_fixed_report_container"></div>
    </div>
  );
};

export default DiagnosticReport;

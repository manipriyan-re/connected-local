import TableDelete from "@/components/shared/TableDelete/TableDelete";
import { useState } from "react";
import Sidebar from "@/components/shared/Sidebar/Sidebar";

const VehicleDashboardAlerts = () => {
  const tableJSONData = {
    tableData: [
      {
        column1: (
          <div>
            <p>P2297</p>
            <p>Cl Side O2 Sensor Out of Range During Deceleration</p>
          </div>
        ),
        column2: "Row 1, Col 2",
        column3: "Row 1, Col 3",
      },
      {
        column1: "Row 2, Col 1",
        column2: "Row 2, Col 2",
        column3: "Row 2, Col 3",
      },
      {
        column1: "Row 3, Col 1",
        column2: "Row 3, Col 2",
        column3: "Row 3, Col 3",
      },
      {
        column1: "Row 4, Col 1",
        column2: "Row 4, Col 2",
        column3: "Row 4, Col 3",
      },
      {
        column1: "Row 5, Col 1",
        column2: "Row 5, Col 2",
        column3: "Row 5, Col 3",
      },
      {
        column1: "Row 6, Col 1",
        column2: "Row 6, Col 2",
        column3: "Row 6, Col 3",
      },
      {
        column1: "Row 7, Col 1",
        column2: "Row 7, Col 2",
        column3: "Row 7, Col 3",
      },
    ],
  };
  const headerData = ["Parameter", "Value", "Column 3"];

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <section className="vehicle_dashboard_alerts_container">
      <div className="vehicle_dashboard_alerts_header">
        <div className="alerts_header_title">
          <button onClick={() => setShowSidebar(true)}>filter</button>
        </div>
        <Sidebar isOpen={showSidebar} setShowSideBar={setShowSidebar} />

        <div className="alerts_header_actions_container"></div>
      </div>
      <div className="vehicle_dashboard_alerts_table_container">
        <TableDelete
          showDelete={false}
          tableData={tableJSONData}
          headerData={headerData}
        />
      </div>
    </section>
  );
};

export default VehicleDashboardAlerts;

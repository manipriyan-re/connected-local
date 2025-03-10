import React, { useState } from "react";
import AlertMap from "./AlertMap";
import AlertTable from "./AlertTable";
import Dropdown from "../Dropdown/Dropdown";
import Tabs from "../Tabs/Tabs";
import { Filter, AlertCircle } from "lucide-react";
import FilterPage from "./FilterPage";
import AlertsDashboardHeaderOptions from "./AlertsDashboardHeaderOptions";

const AlertCommon = () => {
  const [isgoogleMap, setGoogleMap] = useState(false);
  const [ismodal, setIsmodal] = useState(false);
  const groupOptions = [
    { value: "all", label: "All Groups" },
    { value: "asia_pacific", label: "Asia Pacific" },
    { value: "europe", label: "Europe" },
    { value: "america", label: "America" },
    { value: "middle_east_africa", label: "Middle East and Africa" },
  ];
  const vehiclesAll = [
    {
      vin: "ME333ESFMR2000041",
      model: "Super Meteor 650",
      group: "Motoverse G.1",
      lastTracked: "Nov 25, 2024 12:33 PM",
      dtcCount: 12,
      nonDtcCount: 15,
      kmTravelled: "4,941.60km",
      vehicleHealth: "61 %",
      status: "Idle",
    },
    {
      vin: "ME333ESFMR2000042",
      model: "GT 650",
      group: "Motoverse G.1",
      lastTracked: "Nov 25, 2024 12:33 PM",
      dtcCount: 12,
      nonDtcCount: 15,
      kmTravelled: "4,941.60km",
      vehicleHealth: "61 %",
      status: "Active",
    },
    {
      vin: "ME333ESFMR2000043",
      model: "Classic 350",
      group: "Motoverse G.1",
      lastTracked: "Nov 25, 2024 12:33 PM",
      dtcCount: 12,
      nonDtcCount: 15,
      kmTravelled: "4,941.60km",
      vehicleHealth: "61 %",
      status: "Active",
    },
  ];

  const vehiclesOpen = [
    {
      vin: "ME333ESFMR2DSDS000041",
      model: "Super Meteor 650",
      group: "Motoverse G.1",
      lastTracked: "Nov 25, 2024 12:33 PM",
      dtcCount: 12,
      nonDtcCount: 15,
      kmTravelled: "4,941.60km",
      vehicleHealth: "61 %",
      status: "Idle",
    },
    {
      vin: "ME333ESFMR2000042",
      model: "GT 650",
      group: "Motoverse G.1",
      lastTracked: "Nov 25, 2024 12:33 PM",
      dtcCount: 12,
      nonDtcCount: 15,
      kmTravelled: "4,941.60km",
      vehicleHealth: "61 %",
      status: "Active",
    },
    {
      vin: "ME333ESFMR2000043",
      model: "Classic 350",
      group: "Motoverse G.1",
      lastTracked: "Nov 25, 2024 12:33 PM",
      dtcCount: 12,
      nonDtcCount: 15,
      kmTravelled: "4,941.60km",
      vehicleHealth: "61 %",
      status: "Active",
    },
  ];

  const tableTabs = [
    { id: 0, title: "All", content: <AlertTable vehiclesData={vehiclesAll} /> },
    {
      id: 1,
      title: "Open",
      content: <AlertTable vehiclesData={vehiclesOpen} />,
    },
    { id: 2, title: "Pending" },
    { id: 3, title: "Closed" },
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="alerts_header_section_container">
        {/* Title or Status */}
        {isgoogleMap ? (
          <section className="vehilce_dashboard_header_left">
            <div className="font-guardian text-lg font-semibold">
              Alert Vehicle Location(15)
            </div>
          </section>
        ) : (
          <div className="alerts_tabs_container">
            <Tabs
              tabs={tableTabs}
              renderOnClickComponent={
                <AlertsDashboardHeaderOptions
                  isgoogleMap={isgoogleMap}
                  setGoogleMap={setGoogleMap}
                />
              }
            />
          </div>
        )}
      </div>
      {ismodal ? (
        // <div className="fixed top-0 right-0 h-full bg-[#1B1B1B] text-white w-[40%] transform transition-transform duration-1000 ease-in-out z-40 tabs_content_container">
        <FilterPage setIsmodal={setIsmodal} />
      ) : (
        // </div>
        ""
      )}
      {/* Content Section */}
      {isgoogleMap && <AlertMap />}
    </div>
  );
};

export default AlertCommon;

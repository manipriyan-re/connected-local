import { useState } from "react";
import React from "react";
import { Filter, ChevronDown, ChevronRight, AlertCircle } from "lucide-react";
import Dropdown from "../Dropdown/Dropdown";
import Tabs from "../Tabs/Tabs";
import FilterPage from "./FilterPage";

const AlertTable = ({ vehiclesData }) => {
  const [recordsToShow, setRecordsToShow] = useState(5);
  const [expanded, setExpanded] = useState(new Set());
  const [ismodal, setIsmodal] = useState(false);

  const dtcData = [
    {
      code: "P0500",
      description: "Vehicle speed sensor circuit malfunction front/rear sensor",
      dateReported: "Sep 14, 24 12:33 PM",
      dateResolved: "Nov 25, 24 12:33 PM",
      count: 4,
      duration: "20h 59m 0s",
      severity: "High",
      status: "Open",
      statusColor: "green-500",
    },
    {
      code: "P0123",
      description: "Throttle/Pedal Position Sensor/Switch A Circuit High",
      dateReported: "Sep 15, 24 02:00 PM",
      dateResolved: "Nov 26, 24 10:45 AM",
      count: 3,
      duration: "10h 30m 0s",
      severity: "Medium",
      status: "In Progress",
      statusColor: "yellow-500",
    },
    {
      code: "P0301",
      description: "Cylinder 1 Misfire Detected",
      dateReported: "Sep 16, 24 03:30 PM",
      dateResolved: "Nov 27, 24 01:15 PM",
      count: 2,
      duration: "5h 0m 0s",
      severity: "Low",
      status: "Closed",
      statusColor: "red-500",
    },
    {
      code: "P0340",
      description: "Camshaft Position Sensor Circuit Malfunction",
      dateReported: "Sep 17, 24 11:00 AM",
      dateResolved: "Nov 28, 24 09:30 AM",
      count: 5,
      duration: "15h 20m 0s",
      severity: "Medium",
      status: "Open",
      statusColor: "green-500",
    },
    {
      code: "P0420",
      description: "Catalyst System Efficiency Below Threshold (Bank 1)",
      dateReported: "Sep 18, 24 01:15 PM",
      dateResolved: "Nov 29, 24 04:00 PM",
      count: 1,
      duration: "8h 40m 0s",
      severity: "High",
      status: "In Progress",
      statusColor: "yellow-500",
    },
    {
      code: "P0440",
      description: "Evaporative Emission Control System Malfunction",
      dateReported: "Sep 19, 24 04:45 PM",
      dateResolved: "Nov 30, 24 06:15 PM",
      count: 6,
      duration: "30h 10m 0s",
      severity: "Low",
      status: "Closed",
      statusColor: "red-500",
    },
  ];

  const dtcOptions = [
    { value: "all", label: "All DTC" },
    { value: "asia_pacific", label: "Asia Pacific" },
    { value: "europe", label: "Europe" },
    { value: "america", label: "America" },
    { value: "middle_east_africa", label: "Middle East and Africa" },
  ];

  const dtcnondtc = [
    { id: 0, title: "DTC Alerts" },
    { id: 1, title: "Non DTC Alerts" },
  ];
  const toggleExpand = (vin) => {
    const newExpanded = new Set(expanded);
    if (newExpanded.has(vin)) {
      newExpanded.delete(vin);
    } else {
      newExpanded.add(vin);
    }
    setExpanded(newExpanded);
  };
  return (
    <div>
      <table className="w-full">
        <thead style={{ background: "var(--gradient-color-1)" }}>
          <tr className="text-left border-b border-gray-700">
            <th className="p-3">VIN</th>
            <th className="p-3">Group</th>
            <th className="p-3">Last Tracked</th>
            <th className="p-3"># DTC</th>
            <th className="p-3"># Non DTC</th>
            <th className="p-3">Km Travelled</th>
            <th className="p-3">Vehicle Health</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {vehiclesData.map((vehicle, index) => (
            <React.Fragment key={vehicle.vin}>
              <tr
                className="hover:bg-gray-800/50"
                style={{ borderBottom: "1px solid #323232" }}
              >
                <td className="p-3 text-white overflow-hidden text-ellipsis font-montserrat text-sm leading-6">
                  <button
                    onClick={() => toggleExpand(vehicle.vin)}
                    className="flex items-center space-x-2"
                  >
                    {expanded.has(vehicle.vin) ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                    <span className="text-blue-400">{vehicle.vin}</span>
                  </button>
                  <span className="text-gray-400 block pl-8">
                    {vehicle.model}
                  </span>
                </td>
                <td className="p-3">{vehicle.group}</td>
                <td className="p-3">{vehicle.lastTracked}</td>
                <td className="p-3">{vehicle.dtcCount}</td>
                <td className="p-3">{vehicle.nonDtcCount}</td>
                <td className="p-3">{vehicle.kmTravelled}</td>
                <td className="p-3">{vehicle.vehicleHealth}</td>
                <td className="p-3">
                  <span className="flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-md bg-yellow-500"></span>
                    <span>{vehicle.status}</span>
                  </span>
                </td>
              </tr>

              {expanded.has(vehicle.vin) && (
                <tr>
                  <td colSpan={8} className="p-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-4">
                          <Tabs tabs={dtcnondtc} />
                        </div>
                        <div className="flex items-center space-x-4">
                          <Dropdown
                            options={dtcOptions}
                            defaultOption={{ value: "all", label: "All DTC" }}
                          />
                          <div className="flex bg-active  px-2 py-1 rounded">
                            <img
                              className="pl-2"
                              src="/images/search-alert-Icon.svg"
                              alt=""
                            />
                            <input
                              type="text"
                              placeholder="Search by DTC Info"
                              className="pl-2 pr-4 py-1 bg-active rounded focus:outline-none border-none"
                            />
                          </div>
                          <img
                            className="cursor-pointer"
                            src="/images/filter-Icon-alert.svg"
                            alt=""
                            onClick={() => {
                              console.log("hwlwie");
                              setIsmodal(true);
                            }}
                          />
                          <button className="flex items-center space-x-2 bg-white text-black px-3 py-1 rounded">
                            <img src="/images/download-img.png" alt="" />
                            <span>Report</span>
                          </button>
                        </div>
                      </div>

                      <table className="w-full">
                        <thead>
                          <tr
                            className="text-left"
                            style={{ borderBottom: "1px solid #323232" }}
                          >
                            <th className="p-3">DTC</th>
                            <th className="p-3">DTC Info</th>
                            <th className="p-3">First Occ. Time</th>
                            <th className="p-3">Last Occ. Time</th>
                            <th className="p-3"># Occ.</th>
                            <th className="p-3">#Running Hours</th>
                            <th className="p-3">#Severity</th>
                            <th className="p-3">Alert Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {dtcData.map((vehicle, index) => (
                            <tr
                              key={index}
                              style={{ borderBottom: "1px solid #323232" }}
                            >
                              <td className="p-3">{vehicle.code}</td>
                              <td className="p-3">{vehicle.description}</td>
                              <td className="p-3">{vehicle.dateReported}</td>
                              <td className="p-3">{vehicle.dateResolved}</td>
                              <td className="p-3">{vehicle.count}</td>
                              <td className="p-3">{vehicle.duration}</td>
                              <td className="p-3">{vehicle.severity}</td>
                              <td className="p-3">
                                <span className="flex items-center space-x-1">
                                  <span
                                    className={`w-2 h-2 rounded-md bg-${vehicle.statusColor}`}
                                  ></span>
                                  <span>{vehicle.status}</span>
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between mt-4 text-sm">
        <span className="text-gray-400"># Records: 1 - 15 of 100</span>

        <div className="flex items-center space-x-2">
          <span className="text-gray-400"># Records show:</span>
          <select
            value={recordsToShow}
            onChange={(e) => setRecordsToShow(Number(e.target.value))}
            className="bg-gray-500 px-2 py-1 rounded"
          >
            <option value={5}>5</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>
      {ismodal ? (
        // <div className="fixed top-0 right-0 h-full bg-[#1B1B1B] text-white w-[40%] transform transition-transform duration-1000 ease-in-out z-40 tabs_content_container">
        <FilterPage ismodal={ismodal} setIsmodal={setIsmodal} />
      ) : (
        // </div>
        ""
      )}
    </div>
  );
};

export default AlertTable;

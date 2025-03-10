import React from "react";
import CustomDatePicker from "../Datepicker/Datepicker";
import Dropdown from "../Dropdown/Dropdown";
const FilterPage = (props) => {
  const nondtc = [
    { value: "all_non_dtc", label: "All Non-DTC" },
    { value: "emergency_alert", label: "Emergency Alert" },
    { value: "overspeed_alert", label: "Overspeed Alert" },
    { value: "vehicle_battery_low", label: "Vehicle Battery Low" },
    { value: "device_reconnect", label: "Device Reconnect" },
    { value: "low_fuel_alert", label: "Low Fuel Alert" },
  ];
  const severity = [
    { value: "all", label: "All" },
    { value: "high", label: "High" },
    { value: "medium", label: "Medium" },
    { value: "low", label: "Low" },
  ];
  const alertStatus = [
    { value: "all", label: "All" },
    { value: "open", label: "Open" },
    { value: "pending", label: "Pending" },
    { value: "closed", label: "Closed" },
  ];
  const alertvalue = [
    { value: "all", label: "All" },
    { value: "off", label: "OFF" },
    { value: "on", label: "ON" },
  ];
  const clearfun = {};
  return (
    <div className="modal-overlay  ">
      <div className="px-4 py-4 bg-custom-gradient rounded">
        <div>
          <div className="px-2 py-3 flex items-center justify-between h-[7vh]">
            <div className="flex items-center gap-3">
              <img src="/images/filter-icon-wh.png" alt="" />
              <div>Filter</div>
            </div>
            <div>
              <img
                className="cursor-pointer"
                src="/images/close-button-filt.png"
                alt=""
                onClick={() => {
                  props.setIsmodal(false);
                }}
              />
            </div>
          </div>
          <hr />
          <div className="">
            <div className="py-3  h-[27vh]">
              <div className="flex items-center justify-between px-2 py-3 gap-3 h-[12vh] ">
                <div className="flex flex-col gap-3">
                  <span>Alert Status</span>
                  <div className="w-[15vw]">
                    <Dropdown
                      options={alertStatus}
                      defaultOption={{ value: "all", label: "All" }}
                      // searchable
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <span>Severity</span>
                  <div className="w-[15vw]">
                    <Dropdown
                      options={severity}
                      defaultOption={{ value: "all", label: "All" }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between px-2 py-3 h-[12vh]">
                <div className="flex flex-col gap-3">
                  <span>Value</span>
                  <div className="w-[15vw]">
                    <Dropdown
                      options={alertvalue}
                      defaultOption={{ value: "all", label: "All" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[2vh]">
              <hr />
            </div>
            <div className="py-3 h-[25vh]">
              <div className="flex px-3 py-3 items-end h-[5vh]">Date Range</div>
              <div className="flex px-3 py-3 items-center gap-3 justify-between h-[15vh]">
                <div className="flex flex-col gap-3">
                  <div>From</div>
                  <CustomDatePicker />
                </div>
                <div className="flex flex-col gap-3">
                  <div>To</div>
                  <CustomDatePicker />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-end  gap-3 h-[30vh]">
          <div className="tab_title py-2 px-4 text-lg transition-colors duration-300 ease-in-out border-blue-500 active_tab  cursor-pointer">
            Clear All
          </div>
          <div
            className=" bg-gray-50 text-black py-2 px-4 cursor-pointer text-lg rounded-md"
            onClick={() => {
              props.setIsmodal(false);
            }}
          >
            Apply
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPage;

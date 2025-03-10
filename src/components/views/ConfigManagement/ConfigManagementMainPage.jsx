import Header from "@/components/shared/Header/Header";
import ConfigManagementTable from "./ConfigManagementTable";
import Tabs from "@/components/shared/Tabs/Tabs";
import griplines from "../../../../public/images/icons/griplines.svg";
import Search from "@/components/shared/SearchComponent/SearchComponent";
import Dropdown from "@/components/shared/Dropdown/Dropdown";
import FilterSideBarMain from "@/components/shared/FilterSideBar/FilterSideBarMain";
import { useState } from "react";
import Image from "next/image";

// re-enterprise-connected-dashboard-main\src\components\shared\Dropdown\Dropdown.jsx

const ConfigManagementMainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const tableData = [
    {
      "VIN Info": "12345ABC",
      Group: "Sport",
      Haptic: true,
      "Hill Hold": true,
      ABS: true,
      "Traction Control": true,
      "Fog Lamp": false,
      "Cruise Control": true,
      "Custom Ride Mode": true,
      "Vehicle Remote Lock Unlock via LTE": true,
      TPMS: false,
      "Vehicle Auto Wakeup Timer": true,
    },
    {
      "VIN Info": "67890DEF",
      Group: "Family",
      Haptic: false,
      "Hill Hold": true,
      ABS: true,
      "Traction Control": true,
      "Fog Lamp": true,
      "Cruise Control": false,
      "Custom Ride Mode": false,
      "Vehicle Remote Lock Unlock via LTE": true,
      TPMS: true,
      "Vehicle Auto Wakeup Timer": false,
    },
    {
      "VIN Info": "54321GHI",
      Group: "Luxury",
      Haptic: true,
      "Hill Hold": false,
      ABS: true,
      "Traction Control": false,
      "Fog Lamp": true,
      "Cruise Control": true,
      "Custom Ride Mode": true,
      "Vehicle Remote Lock Unlock via LTE": false,
      TPMS: true,
      "Vehicle Auto Wakeup Timer": true,
    },
    {
      "VIN Info": "98765JKL",
      Group: "Economy",
      Haptic: false,
      "Hill Hold": false,
      ABS: true,
      "Traction Control": true,
      "Fog Lamp": false,
      "Cruise Control": false,
      "Custom Ride Mode": false,
      "Vehicle Remote Lock Unlock via LTE": true,
      TPMS: false,
      "Vehicle Auto Wakeup Timer": true,
    },
    {
      "VIN Info": "13579MNO",
      Group: "Adventure",
      Haptic: true,
      "Hill Hold": true,
      ABS: true,
      "Traction Control": false,
      "Fog Lamp": true,
      "Cruise Control": true,
      "Custom Ride Mode": true,
      "Vehicle Remote Lock Unlock via LTE": true,
      TPMS: false,
      "Vehicle Auto Wakeup Timer": false,
    },
    {
      "VIN Info": "24680PQR",
      Group: "Urban",
      Haptic: false,
      "Hill Hold": true,
      ABS: false,
      "Traction Control": true,
      "Fog Lamp": true,
      "Cruise Control": false,
      "Custom Ride Mode": false,
      "Vehicle Remote Lock Unlock via LTE": false,
      TPMS: true,
      "Vehicle Auto Wakeup Timer": true,
    },
    {
      "VIN Info": "11223STU",
      Group: "Offroad",
      Haptic: true,
      "Hill Hold": true,
      ABS: true,
      "Traction Control": true,
      "Fog Lamp": true,
      "Cruise Control": true,
      "Custom Ride Mode": false,
      "Vehicle Remote Lock Unlock via LTE": false,
      TPMS: false,
      "Vehicle Auto Wakeup Timer": true,
    },
    {
      "VIN Info": "33445VWX",
      Group: "Luxury",
      Haptic: false,
      "Hill Hold": false,
      ABS: false,
      "Traction Control": true,
      "Fog Lamp": true,
      "Cruise Control": false,
      "Custom Ride Mode": true,
      "Vehicle Remote Lock Unlock via LTE": true,
      TPMS: true,
      "Vehicle Auto Wakeup Timer": false,
    },
    {
      "VIN Info": "55667YZA",
      Group: "Performance",
      Haptic: true,
      "Hill Hold": true,
      ABS: true,
      "Traction Control": false,
      "Fog Lamp": false,
      "Cruise Control": true,
      "Custom Ride Mode": true,
      "Vehicle Remote Lock Unlock via LTE": false,
      TPMS: true,
      "Vehicle Auto Wakeup Timer": true,
    },
    {
      "VIN Info": "77889BCD",
      Group: "Classic",
      Haptic: false,
      "Hill Hold": false,
      ABS: false,
      "Traction Control": false,
      "Fog Lamp": false,
      "Cruise Control": false,
      "Custom Ride Mode": false,
      "Vehicle Remote Lock Unlock via LTE": false,
      TPMS: false,
      "Vehicle Auto Wakeup Timer": false,
    },
  ];

  const headerData = [
    "VIN Info",
    "Group",
    "Haptic",
    "Hill Hold",
    "ABS",
    "Traction Control",
    "Fog Lamp",
    "Cruise Control",
    "Custom Ride Mode",
    "Vehicle Remote Lock Unlock via LTE",
    "TPMS",
    "Vehicle Auto Wakeup Timer",
  ];

  const data = [tableData, headerData];

  const tabs = [
    { id: 0, title: "Vechile Function" },
    { id: 1, title: "Communication" },
    { id: 2, title: "Vehicle Settings" },
    { id: 3, title: "OTA Manifest" },
    { id: 4, title: "Security" },
    { id: 5, title: "User Settings" },
    { id: 6, title: "Diagonitics" },
    { id: 7, title: "App Settings" },
    { id: 8, title: "Device Settings" },
    { id: 9, title: "DTC Config" },
  ];

  const AllGroups = [
    { value: "All", label: "All" },
    { value: "ICE Vechiles", label: "ICE Vechiles" },
    { value: "EV Vechiles", label: "EV Vechiles" },
  ];

  const AllModels = [
    { value: "All Models", label: "All Models" },
    { value: "Classic 350", label: "Classic 350" },
    { value: "Classic 650", label: "Classic 650" },
    { value: "Bullet 350", label: "Bullet 350" },
    { value: "Bullet 650", label: "Bullet 650" },
    { value: "Hunter", label: " Hunter" },
  ];

  const AllVariants = [
    { value: "All Variants", label: "All Variants" },
    { value: "Variant 1", label: "Variant 1" },
    { value: "Variant 2", label: "Variant 2" },
    { value: "Variant 3", label: "Variant 3" },
    { value: "Variant 4", label: "Variant 4" },
    { value: "Variant 5", label: "Variant 5" },
  ];

  const AllYears = [
    { value: "All Years", label: "All Years" },
    { value: "2025", label: "2025" },
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
  ];

  return (
    <>
      <Header headerTitle="Configuration Management" />
      <div className="flex items-center justify-between py-4 pl-2 pr-10 w-[1836px] h-[88px]">
        <Tabs tabs={tabs} />
      </div>
      <div className="w-full h-[4.5rem] mr-0 flex justify-between   items-center gap-3 flex">
        <Search />
        <div className="flex gap-1">
          <Dropdown searchable={false} Model="All Groups" options={AllGroups} />
          <Dropdown
            searchable={false}
            Model="All Models "
            options={AllModels}
          />
          <Dropdown
            searchable={false}
            Model="All Variant"
            options={AllVariants}
          />
          <Dropdown searchable={false} Model="All Year" options={AllYears} />

          {/* <Image src={verticalline} alt="Grip Lines" className="w-[38px] h-[38px]" /> */}
          {/* <img width="50" height="50" src="https://img.icons8.com/ios/50/vertical-line.png" alt="vertical-line"/> */}

          <button className="" onClick={toggleSidebar}>
            <Image src={griplines} alt="Grip Lines" />
          </button>
        </div>
      </div>
      <ConfigManagementTable data={data} />
      <FilterSideBarMain
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        headerData={headerData}
      />
    </>
  );
};

export default ConfigManagementMainPage;

import React from "react";
import Dropdown from "../Dropdown/Dropdown";
const Titletab = ({title}) => {
  const regionOptions = [
    { value: "global", label: "Global" },
    { value: "asia_pacific", label: "Asia Pacific" },
    { value: "europe", label: "Europe" },
    { value: "america", label: "America" },
    { value: "middle_east_africa", label: "Middle East and Africa" },
  ];

  const countryOptions = [
    { value: "usa", label: "🇺🇸 United States" },
    { value: "india", label: "🇮🇳 India" },
    { value: "germany", label: "🇩🇪 Germany" },
    { value: "japan", label: "🇯🇵 Japan" },
    { value: "brazil", label: "🇧🇷 Brazil" },
    // Add more countries as needed
  ];
  return (
    <div className="vehicle_dashboard_header flex items-center justify-between">
      <section className="vehilce_dashboard_header_left">
        <h1 className="page-title">{title}</h1>
      </section>
      <section className="vehilce_dashboard_header_right flex justify-end">
        <Dropdown
          options={regionOptions}
          defaultOption={{ value: "global", label: "Global" }}
        />
        <div className="mr-2"></div>
        <Dropdown
          options={countryOptions}
          defaultOption={{ value: "india", label: "🇮🇳 India" }}
          searchable
        />
        <div className="px-3 py-1 bg-gray-500 rounded-md">language</div>
      </section>
    </div>
  );
};

export default Titletab;

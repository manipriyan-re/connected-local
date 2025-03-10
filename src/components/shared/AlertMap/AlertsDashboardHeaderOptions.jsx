import Dropdown from "../Dropdown/Dropdown";

const groupOptions = [
  { value: "all", label: "All Groups" },
  { value: "asia_pacific", label: "Asia Pacific" },
  { value: "europe", label: "Europe" },
  { value: "america", label: "America" },
  { value: "middle_east_africa", label: "Middle East and Africa" },
];

const AlertsDashboardHeaderOptions = ({ isgoogleMap, setGoogleMap }) => {
  return (
    <section className="alerts_dashboard_header_options_container">
      {/* Controls */}
      <div className="flex items-center space-x-4 ">
        {/* Emergency Indicator */}
        <div className="bg-active rounded flex items-center gap-3 py-2 px-2 ">
          <svg className="flex items-center justify-center w-2 h-2">
            <circle cx="50%" cy="50%" r="50%" fill="rgb(255, 4, 4)" />
          </svg>
          <span>Emergency</span>
        </div>

        {/* Group Selector */}
        <div className="relative">
          <Dropdown
            options={groupOptions}
            defaultOption={{ value: "all", label: "All Groups" }}
          />
        </div>

        {/* Search Input */}

        <div className="flex bg-active  px-2 py-1 rounded">
          <img className="pl-2" src="/images/search-alert-Icon.svg" alt="" />
          <input
            type="text"
            placeholder="Search by DTC Info"
            className="pl-2 pr-4 py-1 bg-active rounded focus:outline-none border-none"
          />
        </div>

        {/* Filter Icon */}
        <img
          className="cursor-pointer"
          src="/images/filter-Icon-alert.svg"
          alt=""
          onClick={() => {
            console.log("hwlwie");
            setIsmodal(true);
          }}
        />

        {/* Toggle Buttons */}
        <div className="flex">
          <img
            className={`w-9 h-8 cursor-pointer ${
              !isgoogleMap ? "opacity-100" : "opacity-50"
            }`}
            src={
              isgoogleMap
                ? "/images/toggle-tab-inact.png"
                : "/images/Toggle-btn.png"
            }
            alt="Table View"
            onClick={() => setGoogleMap(false)}
            title="Switch to Table View"
          />
          <img
            className={`w-9 h-8 cursor-pointer ${
              isgoogleMap ? "opacity-100" : "opacity-50"
            }`}
            src={
              isgoogleMap
                ? "/images/toggle-map-act.png"
                : "/images/Toggle-map-btn.svg"
            }
            alt="Map View"
            onClick={() => setGoogleMap(true)}
            title="Switch to Map View"
          />
        </div>
      </div>
    </section>
  );
};

export default AlertsDashboardHeaderOptions;

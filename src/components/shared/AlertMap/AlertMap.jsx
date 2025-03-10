import React, { useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { GOOGLE_API_KEY } from "@/constants";
import { ArrowDown } from "lucide-react";

const AlertMap = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const { isLoaded: apiLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_API_KEY,
  });

  const containerStyle = {
    width: "100%",
    height: "27rem",
    borderRadius: "7px",
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  const options = {
    fullscreenControl: false,
  };

  const vehlive = [
    {
      vin: "1HGCM82633A123456",
      vname: "Toyota Camry",
      vmodal: "Super Meteor 650",
      vhealth: "95%",
      vstatus: "Active",
    },
    {
      vin: "2FMDK3GC4EBA98765",
      vname: "Ford Explorer",
      vmodal: "Super Meteor 650",
      vhealth: "65%",
      vstatus: "Idle",
    },
    {
      vin: "3C6TRVGG1JE238647",
      vname: "Ram 1500",
      vmodal: "Class 350",
      vhealth: "99%",
      vstatus: "Active",
    },
    {
      vin: "5J8TB4H34LL021348",
      vname: "Honda CR-V",
      vmodal: "Class 350",
      vhealth: "90%",
      vstatus: "Active",
    },
    {
      vin: "1FA6P8TH6J5105876",
      vname: "Ford Mustang",
      vmodal: "RE Hunter",
      vhealth: "40%",
      vstatus: "Idle",
    },
  ];

  if (loadError) {
    return <div>Error loading Google Maps API</div>;
  }

  return (
    <div className="flex gap-4">
      {/* Google Map Section */}
      <div className="w-[60%]">
        {apiLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            options={options}
            onLoad={() => setIsLoaded(true)}
          />
        ) : (
          <div>Loading Map...</div>
        )}
      </div>

      {/* Vehicle List Section */}
      <div className="w-[40%]">
        {/* Header */}
        <div className="flex items-center p-2 gap-4 mb-4">
          <input type="checkbox" className="w-4 h-4 rounded" />
          <div className="flex items-center gap-2 w-[60%]">
            <span>VIN Info</span>
            <ArrowDown className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-2 w-[26%]">
            <span>Health</span>
            <ArrowDown className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-2 w-[14%]">
            <span>Status</span>
            <ArrowDown className="w-4 h-4" />
          </div>
        </div>

        {/* Vehicle List */}
        <div className="space-y-2">
          {vehlive.map((vehicle) => (
            <div
              key={vehicle.vin}
              className="flex items-center gap-4 p-2  rounded border-t-2 border-[rgb(192, 173, 173)]"
            >
              <input type="checkbox" className="w-4 h-4" />
              <div className="w-[60%]">
                <div className="">{vehicle.vin}</div>
                <div className="flex  items-center gap-2 text-sm ">
                  <div>{vehicle.vmodal}</div>
                  <svg className="flex items-center justify-center w-2 h-2">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="50%"
                      fill="rgba(50, 50, 50, 1)"
                    />
                  </svg>

                  <div>{vehicle.vname}</div>
                </div>
              </div>
              <div className="w-[26%] text-center">{vehicle.vhealth}</div>
              <div className="flex items-center gap-2 w-[14%] text-center">
                <div>
                  {" "}
                  <svg className="flex   w-2 h-2">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="50%"
                      fill={
                        vehicle.vstatus === "Active"
                          ? "rgb(13, 249, 5)"
                          : "rgb(197, 250, 5)"
                      }
                    />
                  </svg>
                </div>
                <div> {vehicle.vstatus}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlertMap;

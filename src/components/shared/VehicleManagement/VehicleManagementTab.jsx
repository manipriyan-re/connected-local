import React from "react";

const VehicleManagementTab = () => {
  const tabledata = [
    {
      vin: "12345ABC",
      model: "Sedan",
      group: "Luxury",
      country: "USA",
      imeiNo: "356789123456789",
      simNo: "8901234567891234567",
      lastModified: "2025-01-28",
      action: "Edit/Delete",
    },
    {
      vin: "67890DEF",
      model: "SUV",
      group: "Family",
      country: "Canada",
      imeiNo: "123456789012345",
      simNo: "8901234567894567890",
      lastModified: "2025-01-27",
      action: "Edit/Delete",
    },
    {
      vin: "24680GHI",
      model: "Hatchback",
      group: "Economy",
      country: "UK",
      imeiNo: "987654321098765",
      simNo: "8901234501234567890",
      lastModified: "2025-01-26",
      action: "Edit/Delete",
    },
    {
      vin: "13579JKL",
      model: "Convertible",
      group: "Sports",
      country: "Germany",
      imeiNo: "123450987654321",
      simNo: "8901234567012345678",
      lastModified: "2025-01-25",
      action: "Edit/Delete",
    },
    {
      vin: "11223MNO",
      model: "Truck",
      group: "Heavy Duty",
      country: "Australia",
      imeiNo: "112233445566778",
      simNo: "8901234598765432101",
      lastModified: "2025-01-24",
      action: "Edit/Delete",
    },
    {
      vin: "44556PQR",
      model: "Van",
      group: "Utility",
      country: "India",
      imeiNo: "334455667788990",
      simNo: "8901234567898765432",
      lastModified: "2025-01-23",
      action: "Edit/Delete",
    },
    {
      vin: "77889STU",
      model: "Crossover",
      group: "Compact",
      country: "Japan",
      imeiNo: "998877665544332",
      simNo: "8901234009876543210",
      lastModified: "2025-01-22",
      action: "Edit/Delete",
    },
    {
      vin: "99001VWX",
      model: "Minivan",
      group: "Family",
      country: "France",
      imeiNo: "776655443322110",
      simNo: "8901234012345678901",
      lastModified: "2025-01-21",
      action: "Edit/Delete",
    },
    {
      vin: "12321YZ",
      model: "Coupe",
      group: "Sports",
      country: "Italy",
      imeiNo: "445566778899001",
      simNo: "8901234598765432012",
      lastModified: "2025-01-20",
      action: "Edit/Delete",
    },
  ];

  return (
    <div className=" overflow-y-auto h-[65vh]">
      <table className="custom-table   w-full rounded-md">
        <thead>
          <tr className="table-header-row sticky top-0">
            <th className="table-header-cell ">VIN Info</th>
            <th className="table-header-cell ">Model</th>
            <th className="table-header-cell ">Group</th>
            <th className="table-header-cell ">Country</th>
            <th className="table-header-cell ">IMEI No</th>
            <th className="table-header-cell ">SIM No</th>
            <th className="table-header-cell ">Last Modified</th>
            <th className="table-header-cell ">Action</th>
          </tr>
        </thead>
        <tbody>
          {tabledata.map((data, index=0) => (
            <tr className="table-body-row" key={index=index+1}>
              <td className="table-body-cell">{data.vin}</td>
              <td className="table-body-cell">{data.model}</td>
              <td className="table-body-cell">{data.group}</td>
              <td className="table-body-cell">{data.country}</td>
              <td className="table-body-cell">{data.imeiNo}</td>
              <td className="table-body-cell">{data.simNo}</td>
              <td className="table-body-cell">{data.lastModified}</td>
              <td className="table-body-cell">{data.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleManagementTab;

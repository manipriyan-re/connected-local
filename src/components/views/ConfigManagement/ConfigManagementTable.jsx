import { useState } from "react";
import "./configTable.scss";

const ConfigManagementTable = ({ data, stickyFirstColumn = false }) => {
  const [tableData, headerData] = data;

  const [visibleRows, setVisibleRows] = useState(5);
  const [rowsToShow, setRowsToShow] = useState(5);

  const handleLoadMore = () => {
    setVisibleRows((prev) => Math.min(prev + rowsToShow, tableData.length));
  };

  const handleRowsToShowChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setRowsToShow(value);
    setVisibleRows(value);
  };

  const renderHeader = () => (
    <thead style={{ color: "var(--text-color-header)" }}>
      <tr className="text-center">
        {headerData.map((header, index=0) => (
          <th
            key={index=index+1}
            className={`px-3 py-6 text-sm cursor-pointer text-center ${
              stickyFirstColumn && (index === 1 || index === 2)
                ? "sticky-header"
                : ""
            }`}
          >
            <div className="flex items-center space-x-2 justify-around">
              {header !== "VIN Info" && header !== "Group" && (
                <input type="checkbox" />
              )}
              <span>{header}</span>
              <span className="text-xl">↑</span>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );

  const renderRow = (row, rowIndex) => (
    <tr key={rowIndex}>
      {headerData.map((header, cellIndex=0) => (
        <td
          key={cellIndex=cellIndex+1}
          className={`p-2 text-center text-sm ${cellIndex < 2 ? "sticky-column" : ""}`}
        >
          {header === "VIN Info" || header === "Group" ? (
            <div className="flex items-center justify-center">
              <span>{row[header]}</span>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <input
                type="checkbox"
                className="cursor-pointer border border-black rounded-[5px]"
                defaultChecked={row[header]}
              />
            </div>
          )}
        </td>
      ))}
    </tr>
  );

  return (
    <>
      <section className="table-wrapper overflow-x-auto">
        <div className="min-w-[110.75rem] h-[33rem] rounded-lg table-auto">
          <table
            className="min-w-full"
            style={{ background: "var(--background-color)" }}
          >
            {renderHeader()}
            <tbody>
              {tableData
                .slice(0, visibleRows)
                .map((item, index) => renderRow(item, index))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="table_controls flex justify-between items-center mt-2">
        <div className="record_info text-sm">
          <span>
            # Records {1}-{Math.min(visibleRows, tableData.length)} of{" "}
            {tableData.length}
          </span>
        </div>
        <button
          onClick={handleLoadMore}
          className="load_more_button border border-white text-white px-4 py-2 text-xs rounded hover:bg-white hover:text-gray-700 disabled:border-gray-500 disabled:text-gray-500 disabled:hover:bg-transparent"
          disabled={visibleRows >= tableData.length}
        >
          Load More
        </button>
        <div className="records_dropdown flex items-center gap-2">
          <label htmlFor="recordsToShow" className="text-sm">
            # Records show
          </label>
          <select
            id="recordsToShow"
            value={rowsToShow}
            onChange={handleRowsToShowChange}
            className="bg-transparent text-sm px-2 py-1 border-none rounded"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default ConfigManagementTable;

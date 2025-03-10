import React from "react";
import filter from "../../../../public/images/icons/filter.svg";
import Image from "next/image";
import Search from "../SearchComponent/SearchComponent";

const FilterSideBarMain = ({ isOpen, toggleSidebar, headerData }) => {
  return (
    <div
      className={`fixed top-2.5 right-0 h-screen text-white text-sm shadow-lg rounded-xl p-[0.0625rem] transform 
                ${isOpen ? "translate-x-0" : "translate-x-full"}
                transition-transform duration-300 ease-in-out z-50`}
      style={{
        width: "24.81rem", // 397px → 24.81rem
        background: "var(--background-color)",
      }}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div
          className="flex justify-between items-center w-full h-[88px] border-b border-[var(--color-2)]"
          style={{ borderBottom: "1px solid var(--color-2)" }}
        >
          <div className="flex justify-center items-center w-full h-[88px]">
            <div className="flex justify-start items-center w-[305px] h-[34px] gap-3">
              <Image
                className="size-[24px]"
                src={filter}
                alt="Filter Icon"
              />
              <h2 className="text-sm">Show Columns</h2>
            </div>
            <button className="text-white text-sm" onClick={toggleSidebar}>
              ✖
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-scroll p-4">
          <div>
            <p className="text-sm p-[20px]">
              Based on Variant and Model filter, columns will be displayed here.
            </p>
          </div>

          <div className="w-full flex flex-col gap-3">
            <div className="flex pl-5">
              <input type="checkbox" className="mr-5" />
              <div className="w-[70%]">
                <Search />
              </div>
            </div>

            <div>
              {headerData?.map((item, index=0) => (
                <div
                  key={index=index+1}
                  className="flex pl-5 w-full h-[64px] items-center space-x-2 border-b border-[var(--color-2)]"
                  style={{ borderBottom: "1px solid var(--color-2)" }}
                >
                  <input type="checkbox" className="mr-5" />
                  <div className="p-2 hover:bg-gray-700 cursor-pointer">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons (Always at the Bottom) */}
        <div className="p-4 border-t border-[var(--color-2)] gap-1 flex justify-end">
          <button
            className="text-white text-sm px-4 py-2  rounded"
            style={{
              background: "var( --color-2)",
              color: "var(--text-color-dark)",
            }}
          >
            Reset All
          </button>
          <button
            className="text-white text-sm px-4 py-2  rounded"
            style={{
              background: "var(--text-color)",
              color: "var(--color-3)",
            }}
          >
            Apply Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSideBarMain;

import React from "react";
import Platform from "./Platform";
import SortComponent from "./SortComponent";

const Index = () => {
  return (
    <>
      <div className="w-full text-white p-6 text-2xl flex justify-center border-b border-white">
        the contests calender
        <span className="text-pink-600 font-semibold">_ </span>
      </div>

      <div className="p-4">
        <SortComponent />
      </div>
    </>
  );
};

export default Index;

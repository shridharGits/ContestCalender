import React, { useState } from "react";
import { monthNames } from "./utils";
import Drawer from "./Drawer";
const Platform = (contestData) => {
  const [actualDate, setTimeRemaining] = useState(
    new Date(contestData.contestData.actualDate)
  );
  const [isOpen, setIsOpen] = useState(false);
  const getMonthName = (dateWithTime) => {
    const date = dateWithTime.split(",");
    const monthIndex = date[0].split("/")[1];
    return `${parseInt(date[0])} ${monthNames[parseInt(monthIndex) - 1]}`;
  };
  console.log(actualDate);
  const handleDrawer = () => {
    setIsOpen((open) => !open);
  };
  // getMonthName(contestDay);
  return (
    <>
      <div
        className={`bg-neutral-900 flex w-full flex-row border border-pink-600 rounded-t-md text-white mt-4`}
        onClick={handleDrawer}>
        <span className="w-full h-16 text-2xl p-2 py-4">
          {contestData.contestData.platform}
        </span>
        <span className="text-center border-l p2 border-pink-600 py-2">
          {actualDate.toDateString()}
        </span>
      </div>
      {isOpen && (
        <Drawer
          isOpen={isOpen}
          actualDate={actualDate}
          duration={contestData.contestData.duration}
        />
      )}
    </>
  );
};

export default Platform;

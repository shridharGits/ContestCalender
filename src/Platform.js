import React, { useState } from "react";
import { monthNames } from "./utils";
const Platform = ({ platformName, contestDayIndex }) => {
  const nextDate = (dayIndex) => {
    var today = new Date();
    today.setDate(
      today.getDate() + ((dayIndex - 1 - today.getDay() + 7) % 7) + 1
    );
    return today;
  };

  const getMonthName = (dateWithTime) => {
    const date = dateWithTime.split(",");
    const monthIndex = date[0].split("/")[1];
    // console.log();
    return `${parseInt(date[0])} ${monthNames[parseInt(monthIndex) - 1]}`;
  };

  const [contestDay, setContestDay] = useState(
    nextDate(contestDayIndex).toLocaleDateString()
  );
  getMonthName(contestDay);
  return (
    <div className="flex w-full flex-row border border-pink-600 rounded-md text-white mt-4">
      <span className="w-full h-16 text-2xl p-2 py-4">{platformName}</span>
      <span className="text-center border-l p2 border-pink-600 py-2">
        {getMonthName(contestDay)}
      </span>
    </div>
  );
};

export default Platform;

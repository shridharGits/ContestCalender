import React from "react";
import { contestData, nextDate } from "./utils";
import Platform from "./Platform";
const SortComponent = () => {
  let contestDates = [];
  contestData.forEach((e) => {
    e.actualDate = nextDate(e.dayIndex);
    contestDates.push(e);
  });
  contestDates.sort((a, b) => a.actualDate - b.actualDate);

  return (
    <div className="text-white">
      <div className="py-4">
        <div>
          latest upcoming contest
          <span className="text-pink-600 font-semibold">_ </span>
        </div>
        <Platform contestData={contestDates[0]} />
      </div>
      <div className="py-4">
        <div>
          lined up contests
          <span className="text-pink-600 font-semibold">_ </span>
        </div>
        <Platform contestData={contestDates[1]} />
        <Platform contestData={contestDates[2]} />
      </div>
    </div>
  );
};

export default SortComponent;

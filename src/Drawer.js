import React, { useState } from "react";
import { dayNames } from "./utils";
const Drawer = ({ duration, actualDate, isOpen }) => {
  const [startsIn, setStartsIn] = useState("cp is for winners!");
  const getDay = (date) => {
    const t = new Date(date);
    return dayNames[parseInt(t.getDay())];
  };
  setTimeout(() => {
    var now = new Date().getTime();
    var timeleft = new Date(actualDate).getTime() - now;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    let s = "";
    if (days > 0) {
      s += `${days}d`;
    }
    if (hours > 0) {
      s += ` ${hours}h`;
    }
    if (minutes > 0) {
      s += ` ${days}m`;
    }
    if (seconds > 0) {
      s += ` ${seconds}s`;
    }
    setStartsIn(s);
  }, 1000);
  return (
    <div
      className={`bg-neutral-900 flex flex-col p-2 justify-center rounded-b-md text-center border-l border-r border-b border-pink-600 ${
        !isOpen && "border-t"
      }rounded-md top-2`}>
      <div className="flex flex-row justify-between">
        <div>duration : {duration}</div>
        <div>{getDay(actualDate)}</div>
      </div>
      <div className="mt-6 p-2 border-t border-stone-700">
        starts in: {startsIn}
      </div>
    </div>
  );
};

export default Drawer;

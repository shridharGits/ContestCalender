import React from "react";
import Platform from "./Platform";
const Index = () => {
  return (
    <>
      <div className="w-full text-white p-6 text-2xl flex justify-center border-b border-white">
        The Contests Calender <span className="text-pink-600">_</span>
      </div>

      <div className="p-4">
        <div className="text-white text-xl pt-4">Upcoming Contests</div>
        <Platform platformName="Leetcode" contestDayIndex={0} />
        <Platform platformName="Codechef" contestDayIndex={3} />
        <Platform platformName="Codeforces" contestDayIndex={4} />
      </div>
    </>
  );
};

export default Index;

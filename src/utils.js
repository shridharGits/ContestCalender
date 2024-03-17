export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const contestData = [
  {
    day: "sunday",
    dayIndex: 0,
    platform: "Leetcode",
    duration: "1h 30m",
  },
  {
    day: "wednesday",
    dayIndex: 3,
    platform: "Codechef",
    duration: "2h",
  },
  {
    day: "thursday",
    dayIndex: 4,
    platform: "Codeforces",
    duration: "2h",
  },
];
export const nextDate = (dayIndex) => {
  var today = new Date();
  today.setDate(
    today.getDate() + ((dayIndex - 1 - today.getDay() + 7) % 7) + 1
  );
  return today;
};

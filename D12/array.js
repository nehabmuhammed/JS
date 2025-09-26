let days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

console.log(days);
console.log(days.length);
console.log(days[0]);
let length = days.length;

console.log(days[length - 1]);

days.push("holiday");

console.log(days);

// days.pop()
days.unshift("funday");
days.shift();
console.log(days);

// current date
let date = new Date();

// the hour in your current time zone
console.log(date.getHours());

// the hour in UTC+0 time zone (London time without daylight savings)
console.log(date.getUTCHours());

// the day of the week (Sunday = 0, Monday = 1, ...)
console.log(date.getDay());

// the day of the month (1-31)
console.log(date.getDate());

// the month (0-11)
console.log(date.getMonth());

// the year (e.g., 2022)
console.log(date.getFullYear());

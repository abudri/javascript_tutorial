// Section 5.2: https://www.learnenough.com/course/javascript/functions/functions_in_a_file

// Returns the day of the week for the given date.
function dayName(date) {  // `date` is a Date object parameter
  const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                         "Thursday", "Friday", "Saturday"];
  return daysOfTheWeek[date.getDay()];
}

// Returns a greeting for the given date. // Section 5.2, Question 2
function greeting(date) {
  return `Hello, world! Happy ${dayName(date)}! - now from day.js file`;  
}
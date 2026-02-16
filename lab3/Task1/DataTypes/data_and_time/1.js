function getWeekDay(date) {
  let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  return days[date.getDay()];
}
let date = new Date(2014, 0, 3);
alert( getWeekDay(date) );


function getLocalDay(date) {
  let day = date.getDay();
  if (day == 0) { 
    day = 7;
  }
  return day;
}


function getDateAgo(date, days) {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); 
alert( getDateAgo(date, 2) ); 
alert( getDateAgo(date, 365) );




function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}
alert( getLastDayOfMonth(2012, 0) );
alert( getLastDayOfMonth(2012, 1) ); 
alert( getLastDayOfMonth(2013, 1) );




function getSecondsToTomorrow() {
  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
  let totalSecondsInADay = 86400;
  return totalSecondsInADay - totalSecondsToday;
}
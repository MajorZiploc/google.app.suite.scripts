function sumEmployeeHoursForRangeOfDays(days) {
  return Array.isArray(days) ?
    days.map(row =>
      row
        .map(cell => sumEmployeeHoursForDay(cell))
        .reduce((acc, ele) => acc + ele, 0))
    : sumEmployeeHoursForDay(days);
}

function sumEmployeeHoursForDay(day) {
  const inputs = day.split('..');
  if (inputs.length != 2) {
    return 0;
  }
  var begin = Number(inputs[0]);
  var end = Number(inputs[1]);
  if (end < begin) {
    end = end + 12;
  }
  return end - begin;
}

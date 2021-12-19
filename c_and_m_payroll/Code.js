function sumEmployeeHoursForRangeOfDays(days) {
  return Array.isArray(days) ?
    days.map(row =>
      row
        .map((cell, i) => sumEmployeeHoursForDay(cell, i))
        .reduce((acc, ele) => acc + ele, 0))
    : sumEmployeeHoursForDay(days, 0);
}

function sumEmployeeHoursForHourRange(hourRange, hourRangeIndex, dayIndex) {
  const errorLabel = `Hour Range Error on Hour Range ${hourRangeIndex + 1} on Day ${dayIndex + 1}: `;
  const inputs = hourRange.split('..').map(s => s.trim());
  if (inputs.length !== 2) {
    if (inputs.length === 1 && inputs[0].toLowerCase() === 'x') {
      return 0;
    }
    throw errorLabel + 'Input Hour Range Value: ' + hourRange + '. Format Notes: hour range in wrong format. Use .. to separate 2 numbers in a range and a , to separate 2 ranges in a single day and an X to mark a day without hours';
  }

  const numRe = /^[0-9]*\.?[0-9]*$/;
  for (n of inputs) {
    if (n === undefined || !n.match(numRe)) {
      throw errorLabel + 'number value of ' + n + ' is not a valid number';
    }
  }
  const begin = Number(inputs[0]);
  var end = Number(inputs[1]);
  if (end < begin) {
    end = end + 12;
  }
  return end - begin;
}

function sumEmployeeHoursForDay(day, dayIndex) {
  const hourRanges = day.split(',');
  return hourRanges
    .map((hourRange, i) => sumEmployeeHoursForHourRange(hourRange, i, dayIndex))
    .reduce((acc, ele) => acc + ele, 0);
}


function convertTimeZone(dateInput, fromTimeZone, toTimeZone) {
  const utcDate = new Date(dateInput);

  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: toTimeZone,
    hour12: false,
  };

  const formatter = new Intl.DateTimeFormat('en-US', options);
  return formatter.format(utcDate);
}

module.exports = convertTimeZone;
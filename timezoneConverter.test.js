const convertTimeZone = require('./timezoneConverter');

describe("Timezone Conversion Tests", () => {
  test("Formats correctly from Asia/Kolkata to America/New_York", () => {
    const inputDate = "2025-06-10T12:00:00Z"; // UTC time
    const result = convertTimeZone(inputDate, "Asia/Kolkata", "America/New_York");
    expect(result).toMatch(/\d{2}\/\d{2}\/\d{4}, \d{2}:\d{2}:\d{2}/);
  });

  test("Returns valid format for same timezone", () => {
    const inputDate = "2025-12-01T10:30:00Z";
    const result = convertTimeZone(inputDate, "Europe/London", "Europe/London");
    expect(result).toMatch(/\d{2}\/\d{2}\/\d{4}, \d{2}:\d{2}:\d{2}/);
  });
});
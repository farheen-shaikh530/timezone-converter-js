# 🌍 Timezone Converter (JavaScript)

A lightweight, dependency-free JavaScript utility that converts time from one IANA timezone to another using the built-in `Intl.DateTimeFormat` API. No Moment.js, Luxon, or third-party libraries required.

---

## ✅ Features

- 🔁 Converts time between two timezones
- 🕓 Accepts ISO datetime strings or `Date` objects
- 🌐 Uses native JavaScript `Intl` API (fully browser-compatible)
- 💡 Lightweight and simple — no dependencies!

---

## 🚀 Usage

```js
const convertTimeZone = require('./timezoneConverter');

const inputTime = "2025-06-10T18:30:00"; // 6:30 PM IST
const fromZone = "Asia/Kolkata";
const toZone = "America/New_York";

const result = convertTimeZone(inputTime, fromZone, toZone);
console.log(result); // "06/10/2025, 09:00:00"

/* eslint-disable */
const { DateTime } = luxon;
/* eslint-enable */
const dt = DateTime.now();
const fullDate = dt.toLocaleString(DateTime.DATETIME_MED);
const dateDiv = document.getElementById('time');

dateDiv.innerHTML = `<p>${fullDate}</p>`;
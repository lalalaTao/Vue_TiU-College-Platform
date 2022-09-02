/**
 * 获取当前时间（年月日时分秒）
 */
export function doGetNowTime() {
  const nowDate = new Date();
  let date = {
    year: nowDate.getFullYear(),
    month: nowDate.getMonth() + 1,
    date: nowDate.getDate(),
    hours: nowDate.getHours(),
    minutes: nowDate.getMinutes(),
    seconds: nowDate.getSeconds(),
  };
  let newMonth = date.month > 10 ? date.month : "0" + date.month;
  let newDay = date.date > 10 ? date.date : "0" + date.date;
  let newMinutes = date.minutes < 10 ? "0" + date.minutes : date.minutes;
  let newSeconds = date.seconds < 10 ? "0" + date.seconds : date.seconds;
  return date.year + "/" + newMonth + "/" + newDay + " " + date.hours + ":" + newMinutes + ":" + newSeconds;
}

export function downloadFile (url, fileName) {
  const x = new XMLHttpRequest();
  x.open("GET", url, true);
  x.responseType = 'blob';
  x.onload = function () {
    const url = window.URL.createObjectURL(x.response)
    const a = document.createElement('a');
    a.href = url
    a.download = fileName;
    a.target="_blank"
    a.click()
  }
  x.send();
}

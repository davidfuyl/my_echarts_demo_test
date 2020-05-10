window.onload = function() {
  getCurrentTime();
}; //定时刷新
function getCurrentTime() {
  //创建当前系统时间的Date对象
  var dateObj = new Date();
  //获取完整年份值
  var year = dateObj.getFullYear();
  //获取月份
  var month = dateObj.getMonth() + 1;
  //获取月份中的日
  var date = dateObj.getDate();
  //获取星期值
  var day = dateObj.getDay();
  var weeks = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六"
  ];
  //根据星期值，从数组中获取对应的星期字符串
  var week = weeks[day];
  //获取小时
  var hour = dateObj.getHours();
  //获取分钟
  var minute = dateObj.getMinutes();
  //获取秒钟
  var second = dateObj.getSeconds();
  //如果月、日、时、分、秒的值小于10，在前面补0
  if (month < 10) {
    month = "0" + month;
  }
  if (date < 10) {
    date = "0" + date;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }
  var currentTime =
    year +
    "年" +
    month +
    "月" +
    date +
    "日 " +
    week +
    " " +
    hour +
    ":" +
    minute +
    ":" +
    second;
  document.querySelector(".showTime").innerHTML = "[ " + currentTime + " ]";
  //每隔一秒重新调用一次该函数
  setTimeout("getCurrentTime()", 1000);
}

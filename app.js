const dynamicTime = document.querySelector('.time');
function doTime(dynamicTime) {
    const t = new Date();
    dynamicTime.innerHTML = t.getHours() + ':' + t.getMinutes() + ':' + t.getSeconds();
}
setInterval(doTime, 100, dynamicTime);

const dynamicYear = document.querySelector('.date');
function doDate(dynamicYear) {
    const d = new Date();
    dynamicYear.innerHTML = 'since.' + d.getFullYear();
}
setInterval(doDate, 100, dynamicYear)
const dynamicTime = document.querySelector('.time');
const dynamicYear = document.querySelector('.date');

function doDate(dynamicTime, dynamicYear) {
    const d = new Date();
    dynamicTime.innerHTML = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    dynamicYear.innerHTML = 'since.' + d.getFullYear();
}
setInterval(doDate, 100, dynamicTime, dynamicYear)
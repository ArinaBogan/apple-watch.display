
class Watch {
    constructor() {
        setInterval(this.doDate, 10, this.dynamicYear)
        setInterval(this.doTime, 10, this.dynamicTime)
    }

    dynamicYear = document.querySelector('.date');
    doDate(dynamicYear) {
        const d = new Date();
        dynamicYear.innerHTML = 'since.' + d.getFullYear();
    }

    dynamicTime = document.querySelector('.time');
    doTime(dynamicTime) {
        const t=new Date();
        dynamicTime.innerHTML = t.getHours() + ':' + t.getMinutes() + ':' + t.getSeconds();
    }

}
const watch = new Watch();
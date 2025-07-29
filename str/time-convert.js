function timeConvert(minutes) {
    function minutesToHoursDecimal(minutes) {
        return Number((parseInt(minutes) / 60).toFixed(2))
    }

    function getHours(minutes) {
        return Math.floor(minutesToHoursDecimal(minutes))
    }

    function getMinutes(number) {
        return Math.round(Number((number % 1).toFixed(2)) * 60)
    }

    function lessThan10(number) {
        return number < 10;
    }

    function formatHours(numberHours) {
        return lessThan10(numberHours) === true ? `0${numberHours}` : `${numberHours}`;
    }

    function formatMinutes(numberMinutes) {
        return lessThan10(numberMinutes) === true ? `0${numberMinutes}` : `${numberMinutes}`;
    }

    function format24HourString(hours, minutes) {
        return `${hours}:${minutes}`
    }

    return format24HourString(formatHours(getHours(minutes)), formatMinutes(getMinutes(minutesToHoursDecimal(minutes))))
}

function timeConvert(minutes) {
    function padZero(num) {
        return num < 10 ? `0${num}` : `${num}`
    }
    const hours = Math.trunc(minutes / 60);
    const mins = minutes % 60;
    return `${padZero(hours)}:${padZero(mins)}`
}

timeConvert(1000)
timeConvert(59)
// timeConvert(61)
// timeConvert(1440)
// timeConvert(0)
// timeConvert(34303)
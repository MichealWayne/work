/**
 * @module Date
 * @description date functions
 */

/**
 * @function dayOfYear
 * @param {Date} date 
 * @return {number}
 */
export function dayOfYear (date: Date) {
    return Math.floor((+date - +new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
}

/**
 * @function getColonTimeFromDate
 * @param {Date} date 
 * @return {string}
 */
export function getColonTimeFromDate (date: Date) {
    return date.toTimeString().slice(0, 8);
}

/**
 * @function getDaysDiffBetweenDates
 * @param {Date} dateInitial 
 * @param {Date} dateFinal 
 * @return {number}
 */
export function getDaysDiffBetweenDates (dateInitial: Date, dateFinal: Date) {
    return (+dateFinal - +dateInitial) / (1000 * 3600 * 24);
}

/**
 * @function isAfterDate
 * @param {Date} dateA 
 * @param {Date} dateB 
 * @return {boolean}
 */
export function isAfterDate (dateA: Date, dateB: Date) {
    return dateA > dateB;
}

/**
 * @function isBeforeDate
 * @param {Date} dateA 
 * @param {Date} dateB 
 * @return {boolean}
 */
export function isBeforeDate (dateA: Date, dateB: Date) {
    return dateA < dateB;
}

/**
 * @function tomorrow
 * @return {string}
 */
export function tomorrow () {
    let t = new Date();
    t.setDate(t.getDate() + 1);
    return t.toISOString().split('T')[0];
}

/**
 * @function formatRemainTime
 * @param {Date} startTime 
 * @param {Date} endTime 
 * @return {string}
 */
export function formatRemainTime(startDate: Date, endDate: Date) {
    let t = (+endDate) - (+startDate);
    let d = 0,
        h = 0,
        m = 0,
        s = 0;

    if (t >= 0) {
        d = Math.floor(t / 1000 / 3600 / 24);
        h = Math.floor(t / 1000 / 60 / 60 % 24);
        m = Math.floor(t / 1000 / 60 % 60);
        s = Math.floor(t / 1000 % 60);
    }
    return d + '天 ' + h + '小时 ' + m + '分钟 ' + s + '秒';
}
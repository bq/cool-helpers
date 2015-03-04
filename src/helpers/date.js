/**
 * Date helpers set
 * @namespace date
 */
var date = {
    /**
     * Returns given date with given format
     * @memberof date
     * @param  {string} date      Date to format
     * @param  {string} format    Date format
     * @param  {string} errorMsg  Error message key
     *
     * @example
     *
     * {{formatDate date 'yyyy/mm/dd'}}
     */
    formatDate: function(date, format) {
        return moment(date).format(format);
    },

    /**
     * Returns the difference between two dates in given format
     * @memerof date
     * @param  {string} startDate   Start date
     * @param  {string} endDate     End date
     * @param  {string} format      Date difference format
     * @return {string}             formated date
     */
    subtractDates: function(startDate, endDate, format) {
        return moment(moment(moment(startDate)).diff(moment(endDate))).format(format);
    },

};

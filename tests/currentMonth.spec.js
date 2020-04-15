const dates = require('../modules/dates.js');

describe('currentMonth function', () => {
    test('it should return a string of the current month', () => {
        let date = new Date;
        let thisMonth = date.getMonth();

        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];

        expect(dates.currentMonth()).toBe(months[thisMonth]);

    })
})

describe('translateEsMonth function', () => {
    test('it should return a string that represents the current month of the year, based on the naming found in the world of Tamerial', () => {
        let testMonth = 3;

        expect(dates.esMonths(testMonth)).toBe("Rain's Hand");
    })
})
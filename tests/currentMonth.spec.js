const date = new Date();

describe('currentMonth function', () => {
    test('it should return a string of the current month', () => {
        const monthInt = 3;

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

        const month = months[monthInt];

        expect(currentMonth()).toEqual(month);

    })
})
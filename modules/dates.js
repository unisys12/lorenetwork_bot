let date = new Date;

module.exports = {
    currentMonth: function () {
        let month = date.getMonth();
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
        ]
        return months[month]
    }
}
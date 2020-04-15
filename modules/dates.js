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
    },

    esMonths: function (month) {

        switch (date.getMonth()) {
            case 0:
                return 'Morning Star'
                break;
            case 1:
                return "Sun's Dawn"
                break;
            case 2:
                return "First Seed"
                break;
            case 3:
                return "Rain's Hand"
                break;
            case 4:
                return 'Second Seed'
                break;
            case 5:
                return 'Mid Year'
                break;
            case 6:
                return "Sun's Height"
                break;
            case 7:
                return 'Last Seed'
                break;
            case 8:
                return 'Hearthfire'
                break;
            case 9:
                return 'Frostfall'
                break;
            case 10:
                return "Sun's Dusk"
                break;
            case 11:
                return 'Evening Star'
                break;
            default: ""
                break;
        }
    }
}
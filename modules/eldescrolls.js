const dates = require('../modules/dates');
const { google } = require("googleapis");
const sheet = google.sheets("v4");
const date = new Date();
let matching_activities = [];

module.exports = {
    ElderScrolls: () => {
        sheet.spreadsheets.values.get(
            {
                key: process.env.googleSheetsKey,
                spreadsheetId: process.env.elderScrollsSheetID,
                range: process.env.elderScrollsSheetRange
            },
            (err, response) => {
                if (err) return console.log(`Error accessing Elder Scrolls spreadsheet data -> ${err}`);
                const rows = response.data.values;
                gatherLore(rows);
            }
        )
    }
}

gatherLore = (rows) => {

    let dailies = []

    rows.forEach(r => {
        if (getMonthlyActivities(r)) {
            matching_activities.push(r);
        }
    });

    matching_activities.filter(activity => {
        if (activity[2] == date.getDay()) {
            dailies.push(activity);
        }
    })

    return dailies;

}

getMonthlyActivities = (row) => {
    return row[1] == dates.esMonths(date.getMonth());
}

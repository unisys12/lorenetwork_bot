const dates = require('../modules/dates');
const { google } = require("googleapis");
const sheet = google.sheets("v4");
const htmlFormat = require('./htmlFormt');

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

    let lore = []

    rows.forEach(row => {
        if (getMonthlyActivities(row)) {
            matching_activities.push(row);
        }
    });

    matching_activities.filter(activity => {
        if (activity[2] == date.getDate()) {
            lore.push(activity);
        }
    })

    if(lore.length < 1) {
        return getRandomLore(rows);
    } else if (lore.length > 1){
        let index = pickRandom(lore);
        return htmlFormat.getLore(lore[index]);
    } else {
        return htmlFormat.getLore(lore);
    }

}

getMonthlyActivities = (row) => {
    return row[1] == dates.esMonths(date.getMonth());
}

pickRandom = (data) => {
    return [Math.round(Math.random() * (data.length - 1))];
}

getRandomLore = (rows) => {
    let random = [];
    rows.forEach(row => {
        if (row[1] || row[2] === "") {
            random.push(row);
        }
    });

    if (random.length > 0) {
        let index = pickRandom(random)
        htmlFormat.getLore(random[index]);
    } else {
        console.log(`There was a issue gathering random lore`);
    }
}

Lore Network TwitterBot
=======================

## Goals
Create a bot that will automatically make a new post on Twitter containing a tidbit of ES/Halo lore based on the current
month and day of the week. 

## Implimentation
This feature was a part of LoreBot12-86 and recently removed. We have a Google Sheet, that acts as a timeline, for each 
Elder Scrolls and Halo. These sheets are queried using the Google API using their JS library.

I would like to do this using Lamda's, but will most likely stick with Heroku.

Also I will look into moving the Google Sheets data over to MongoDB Atlas. Then use MongoDB Stitch functions to pull
aggregated data from the clusters. Let's get it working with Sheets first, them refactor to Atlas.

### Workflow Story
- At a predetermined time of day, trigger the methods for each to run.
- Get the current day of the week and the month of the year
- Pull down all the data in the sheet and place it into an array.
- Check the array for the value of the month property for the current month and place the results into a new array.
- During the above check, if the month value is NULL, place those into a seperate array for random tweets.
- Check the populated month array for a match to the current day of the week and place those into yet another array.
- If the day_match array is populated with more than one entry, pick one at random based on their index.

### Random Tweet Story
As outlined above, random tweets are those that do not contain a month value. The way these are chosen is as follows:
- Each entry in an array has a predefinded index value.
- We can get the total number of entries using the `length` method.
- Use the `random` method to pick an entry between 0 and the result of the count method.
- Then select and format that tweet by 
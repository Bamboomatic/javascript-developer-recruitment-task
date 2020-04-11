# javascript-developer-recruitment-task

Create an Angular APP using weather API (https://openweathermap.org/current).

Tech stack:

- Angular

Features requirements:

- Possibility to search for a city using name
- Add cities to favorites
- Create a dashboard like screen to view all cities that are added to favorites. Data displayed on dashboard should be basic (temperature/humidity/weather description)
  - Add option to sort displayed favorite cities by name
  - Add filter ability to displayed cities
- Create a detail screen for displaying City weather (current + 5 days forecast) with detailed data.
  - On this screen present as many data as possible
- Preserve favorite cities in local storage

You can use UI library of choice. If you use one please share why you have chosen this one.
If you need an Icon pack use https://fontawesome.com/how-to-use/on-the-web/using-with/angular

Put your implementation on your GitHub. Fork this repo and share us a link when you think the task is ready for review.
Feel free add a comment on what was the biggest issue during this task.
If you can't made it on time, please share us the most recent version and tell us what is missing and why you couldn't finish.

_Good luck!_

_co.brick team_

# Weatherly

By default (if user agree to share location) it loads current weather of closest city by coordinates and display this place in google maps.

User can click on map to get weather of clicked area.

User can add currently displayed City to favourites by clicking on 'star'. Cities are stored in local storge.

After clicking at 'i' button, app displays detailed forecast for every 3 hours for next 5 days.

In favourites user can sort added Cities alphabetically ascending or descending or filter them by name.
After clicking at 'x', city will be removed from favourtes.
Clicking at city name also redirects to detailed forecast.

## Development server

Run `ng serve` in 'weather' folder for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

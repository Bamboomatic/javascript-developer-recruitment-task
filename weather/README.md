# Weatherly

LIVE at: https://bamboomatic.github.io/javascript-developer-recruitment-task/

This App uses OpenWeather API (https://openweathermap.org) to display current weather.
By default (if user agree to share location) it loads current weather of closest city by coordinates and display this place in google maps.

User can click on map to get weather of clicked area.

User can add currently displayed City to favourites by clicking on 'star'. Cities are stored in local storge.

After clicking at 'i' button, app displays detailed forecast for every 3 hours for next 5 days.

In favourites user can sort added Cities alphabetically ascending or descending or filter them by name.
After clicking at 'x', city will be removed from favourtes.
Clicking at city name also redirects to detailed forecast.

## Development server

Run `ng serve` in 'weather' folder for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

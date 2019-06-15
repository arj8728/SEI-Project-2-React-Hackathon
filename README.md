# General Assembly SEI Project 2: Reactathon App

## Timeframe
1.5 days

## Technologies used:
* JavaScript (ES6)
* React
* HTML5
* Git
* GitHub
* CSS
* SCSS
* Bulma
* Axios
* Insomnia
* Webpack
* Heroku

## APIs used:
* Dark Sky API
* Transport for London (TFL) API
* Mapbox-gl

## Installation
Clone or download the repo
Open the index.html in your browser of choice
In the terminal run 'npm run serve'

## Overview
This was a pair-programming hackathon project with Arjun Modi.
The application allows the user the make a decision whether they should cycle in London according to the current weather and pollution levels.
It also show a map which pinpoints the users current location and displays all of the Santander bike docks local to the user.

Link to project: https://lhmurphy.github.io/Project_2/#/

## Process
1. After coming up with the initial concept, we had a wireframing session to plan out the layout and user journey. We decided on a one-page app for ease of use as we know that Londoners are very busy.
2.
We started off by researching the types of data that was available through the Dark Sky and TFL APIs, once we knew what data we wanted to consume we tested grabbing the data in Insomnia.
3.
Next, we worked on creating the first react component that would bring in the air pollution data from the TFL air quality API to the main page.
4. Once this was successful we made another component that brought in the bike point data from the TFL API nearest to us.
We then completed the site by adding in the map of London (from Mapbox-gl) into the main site. From this point we had to work out how to calculate the latitudes and longitudes of the corresponding bike points to markers on the map.
5.
By implementing ‘navigator.geolocation.watchPosition’ in the componentDidMount in our app.js we were able to correctly get the latitudes and longitudes of the current users device and therefor save their location to state which we were then able to pass via props to the Bikes.js component.
6. In the Bikes.js component, we used params in the componentDidMount lifecycle hook to locate all of the bike docks within a 500m radius and pinpoint them on the map.

## Challenges
The geolocation pinpoints mentioned above was one of the main challenges we came across, once we overcame this we styled the points on the map as we wanted the marker point to display the bike dock location as accurately as possible.

## Wins
On the whole we were pleased with how the site functioned as one page to allow a bike user to make a decision on whether to cycle based on pollution levels and the availability of nearest bikes points. Learning how to consume data from 3 different APIs in one project was a real feat and they all work nicely together.

## Future features
We would have liked to implement a 5-day weather forecast with weather icons that changed according to the Dark Sky weather API data. Also to increase the functionality of the map we would allow the user to click on a bike point that displays the information and exact location on the map.

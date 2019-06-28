# Project 2: Should I cycle in London today? - Front-End Application - React Hackathon - Partner Project

### Timeframe
1.5 days

## Technologies used
* JavaScript (ES6)
* ReactJS
* HTML5
* Git/ GitHub
* CSS
* Bulma
* Axios
* Insomnia
* Webpack
* Slack
* Insomnia

## APIs used:
* Dark Sky  API
* Transport for London (TFL) API
* Mapbox-gl

## Installation
1. Clone or download the repo
2. Open the `index.html` in your browser of choice
3. In the terminal run 'npm run serve'

## Overview


![image](https://user-images.githubusercontent.com/43292507/59607911-2a7d4a80-910c-11e9-9f55-f480e811c011.png)


Current Time, Weather, Pollution levels and Bike dock information based on user location:

![IMAGE 2](https://user-images.githubusercontent.com/43292507/59608118-9495ef80-910c-11e9-890f-69a3f6943f1a.jpg)


London Map of Local Bike Points

![IMAGE 3 ](https://user-images.githubusercontent.com/43292507/59608046-716b4000-910c-11e9-9713-fa3cf3d13001.jpg)

Link to deployed project:

_https://arj8728.github.io/SEI-Project-2-React-Hackathon/#/_

### Introduction

 This was a pair-programming React Hackathon with Laura Murphy.

 This application allows a cyclist to decide whether they should cycle in London, based on the  weather, air quality and availability of the nearest bike docks. The user is able to see a one page app that displays the time, two day pollution levels forecast, a selection of bike docks and map displaying these points.

### Process

After a wireframing session we decided to build a React app that is focused on a one page app for London Cyclists. We started off testing the different types of data avaialble on Dark Sky and TFL APIs by using Insomnia to make requests and display this data.

We worked on creating the react component that would bring in the air pollution data from the TFL air quality api to the main page.

Once this was successful we made another component that brought in the bike point data from the TFL api nearest to us.

We then completed the site with by adding in a map of London using Mapbox-gl and displayed this on our main site. From this point we had to work out how to calculate the latitudes and longitudes of the corresponding bike points to markers on the mapbox.

By implementing 'navigator.geolocation.watchPosition' in the componentDidMount of our app.js we were able to correctly get the latitudes and longitudes of the current user and save their location to state which we were then able to pass via props to the Bikes.js component.

```JavaScript
componentDidMount() {
  navigator.geolocation.watchPosition((position) => {
    const { latitude, longitude } = position.coords
    this.setState({ location: { lat: latitude, lon: longitude } })
  })
}
```


In the Bikes.js component, we used params in the componentDidMount lifecycle hook to locate all of the bike docks within a 500m radius and have these pinpointed on the map.


```JavaScript
ComponentDidMount() {
  axios.get('https://cors-anywhere.herokuapp.com/https://api.tfl.gov.uk/bikepoint', {
    params: {
      lat: this.props.location.lat,
      lon: this.props.location.lon,
      radius: 500
    }
  })
    .then(res => this.setState({ bikes: res.data.places }))
}
```



### Challenges

 Our main challenge was to get the  points on the map to display with accurate data from the bike point TFL data. Once we overcame this we styled the points on the map as we wanted the marker point to display the bike point location as accurately as possible.

### Wins

 On the whole we were please with how the site functioned as one page to allow a bike user to make a decision on whether to cycle based on pollution levels and the availability of nearest bikes points. Learning how to consume 3 different API's into one project was a great challenge to overcome and it works nicely on this app. The app also functions well in a mobile view and is responsive. This was our idea to have a one page app fully realised.

 ![IMAGE 4 MOBILE VIEW](https://user-images.githubusercontent.com/43292507/59608850-26eac300-910e-11e9-98f1-b4089efee0a1.png)


### Future features

We would have liked to implement a 5 day weather forecast with weather icons that changed according to the Dark Sky weather api data. Also to increase the functionality of the map we would allow the user to click on a bike point that displays the information and exact location on the map.

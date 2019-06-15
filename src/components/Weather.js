import React from 'react'
import axios from 'axios'
//import 'weather-icons/css/weather-icons.css'

class Weather extends React.Component {

  constructor() {
    super()

    this.state = {
      weather: []
    }

  }

  componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/5a5b9f42466b4e35a99ce782dc6b92d9/51.509865,-0.118092')
    //.then(res => this.setState({ weather: res.data}))

      .then(res => {
        const presentState = {...this.state}
        presentState.currentWeather = res.data.minutely.summary
        presentState.time = res.data.minutely.data[0].time
        presentState.icon = res.data.hourly.data[0].icon
        console.log(presentState.time)
        console.log(presentState.currentWeather)
        console.log(presentState.icon)
        this.setState({
          ...presentState
        })
      })
  }
  //
  // getIconClass(icon) {
  //   const className = icon.replace('partly-', '')
  //     .split('-')
  //     .reverse()
  //     .join('-')
  //   if(className === 'day-clear') {
  //     return 'wi wi-day-sunny is-size-1'
  //   }
  //   if(className === 'wind') {
  //     return 'wi wi-day-windy is-size-1'
  //   }
  //   return `wi wi-${className} is-size-1`
  // }

  render() {
    return(
      <section className="section">
        <div className="container">
          <h1 className="title is-1">{(new Date().getHours())}
            :
            {(new Date().getMinutes())}</h1>
          <h2 className="title is-1">{this.state.currentWeather}</h2>

        </div>
      </section>


    )
  }

}

export default Weather

// <p>
//   <i className = {this.getIconClass(this.state.icon)}></i>
// </p>

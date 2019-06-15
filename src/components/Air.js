import React from 'react'
import axios from 'axios'

class Air extends React.Component {

  constructor() {
    super()

    this.state = {
      air: []
    }
  }

  componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/https://api.tfl.gov.uk/AirQuality')
      .then(res => {
        this.setState({ air: res.data.currentForecast })
      })
  }

  render() {
    console.log(this.state.air)
    return (
      <section className="section">
        <h1 className= "title"> Pollution Levels </h1>
        <div className="container">
          <div className="columns">
            {this.state.air.map(airy =>
              <div className="column" key={airy.forecastID}>
                <h2> {airy.forecastSummary}</h2>
                <h2> Nitrogen Dioxide (NO₂) Levels: {airy.nO2Band}</h2>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }

}

export default Air

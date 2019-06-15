import React from 'react'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoibGhtdXJwaHkiLCJhIjoiY2p1dTNzcnNhMGRrMjN5cGl2cmFpNmR0bCJ9.dghNRjtlhnn5h6UTeqnrKA'

class Map extends React.Component {

  componentDidMount() {
    const { lng, lat, zoom } = this.props

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom
    })
    this.map.scrollZoom.disable()
  }


  componentDidUpdate() {
    if(this.markers) return false

    this.markers = this.props.bikes.map(bike => {
      const el = document.createElement('div')
      el.className = 'marker'

      new mapboxgl.Marker(el)
        .setLngLat([bike.lon, bike.lat])
        .addTo(this.map)
    })
  }

  render() {

    return (
      <div ref={el => this.mapContainer = el} className="map" />
    )
  }
}

export default Map

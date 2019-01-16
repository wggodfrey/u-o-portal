import React from 'react'
import styled from 'styled-components'

import GoogleMapReact from 'google-map-react'
import Donut from 'components/scenes/svg/donut'

const Wrapper = styled.div`
  width: calc(50% - 5px);
  height: 100%;
  overflow: hidden;
`

const EmptyMarker = styled.div`
  display: none;
`

const mapOptions = {
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
  styles: [{"featureType":"administrative.country","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.province","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"gamma":"0.00"},{"saturation":"-100"},{"color":"#f4f4f4"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"saturation":"0"},{"gamma":"0.53"},{"weight":"1"},{"color":"#000000"},{"lightness":"57"}]},{"featureType":"landscape.man_made","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#c5e3b0"}]},{"featureType":"landscape.natural","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"labels.text.fill","stylers":[{"color":"#c15757"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"landscape.natural.terrain","elementType":"labels.text.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#d5d5d5"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#9ab9be"}]}],
  gestureHandling: 'greedy',
}

class PieMap extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      zoom: 16,
      center: {lat: 21.299693, lng: -157.816757},
    }
  }

  handleZoomChange() {
    const zoom = this.refs.map.getZoom();
    if (zoom !== this.state.zoom) {
      this.setState({zoom});
    }
  }

  handleCenterChange() {
    const center = this.refs.map.getCenter();
    if (!center.equals(this.state.center)) {
      this.setState({center});
    }
  }

  render() {
    return (
      <Wrapper>
        <GoogleMapReact
          ref='map'
          bootstrapURLKeys={{key:`AIzaSyAfn2rNjZB0e3XXZwr5_qg_WFo8BJeK0T0`}}
          options={mapOptions}
          zoom={this.state.zoom}
          center={this.state.center}
          onCenterChanged={this.handleCenterChange.bind(this)}
          onZoomChanged={this.handleZoomChange.bind(this)}>
          {
            this.props.buildings.map((b, i) => 
              b.activeMulti
              ? <Donut
                  key={`donut_${i}`}
                  zoom={this.state.zoom}
                  {...b}
                />
              : <EmptyMarker />
            )
          }
        </GoogleMapReact>
      </Wrapper>
    )
  }
}

export default PieMap

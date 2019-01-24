import React from 'react'

import { google } from './../../../credentials'
import { ncesCategories } from 'utilities/colors'

import GoogleMapReact from 'google-map-react'
import MapPie from 'components/scenes/svg/MapPie'

const mapOptions = {
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
  styles: [{'featureType':'administrative.country','elementType':'labels','stylers':[{'visibility':'off'}]},{'featureType':'administrative.province','elementType':'labels','stylers':[{'visibility':'off'}]},{'featureType':'administrative.locality','elementType':'labels','stylers':[{'visibility':'off'}]},{'featureType':'administrative.neighborhood','elementType':'geometry','stylers':[{'visibility':'on'}]},{'featureType':'administrative.neighborhood','elementType':'labels','stylers':[{'visibility':'off'}]},{'featureType':'administrative.land_parcel','elementType':'geometry.fill','stylers':[{'visibility':'off'}]},{'featureType':'administrative.land_parcel','elementType':'labels','stylers':[{'visibility':'off'}]},{'featureType':'landscape','elementType':'labels','stylers':[{'visibility':'off'}]},{'featureType':'landscape.man_made','elementType':'geometry.fill','stylers':[{'visibility':'on'},{'gamma':'0.00'},{'saturation':'-100'},{'color':'#f4f4f4'}]},{'featureType':'landscape.man_made','elementType':'geometry.stroke','stylers':[{'visibility':'on'},{'saturation':'0'},{'gamma':'0.53'},{'weight':'1'},{'color':'#000000'},{'lightness':'57'}]},{'featureType':'landscape.man_made','elementType':'labels','stylers':[{'visibility':'off'}]},{'featureType':'landscape.natural','elementType':'geometry.fill','stylers':[{'visibility':'on'},{'color':'#c5e3b0'}]},{'featureType':'landscape.natural','elementType':'labels','stylers':[{'visibility':'off'}]},{'featureType':'landscape.natural','elementType':'labels.text.fill','stylers':[{'color':'#c15757'}]},{'featureType':'landscape.natural.landcover','elementType':'geometry.fill','stylers':[{'hue':'#ff0000'}]},{'featureType':'landscape.natural.terrain','elementType':'labels.text.fill','stylers':[{'hue':'#ff0000'}]},{'featureType':'poi','elementType':'geometry.fill','stylers':[{'visibility':'on'}]},{'featureType':'poi','elementType':'labels','stylers':[{'visibility':'off'}]},{'featureType':'road','elementType':'geometry.fill','stylers':[{'visibility':'on'},{'color':'#d5d5d5'}]},{'featureType':'road','elementType':'geometry.stroke','stylers':[{'visibility':'off'}]},{'featureType':'road','elementType':'labels','stylers':[{'visibility':'off'}]},{'featureType':'transit','elementType':'labels','stylers':[{'visibility':'off'}]},{'featureType':'water','elementType':'geometry.fill','stylers':[{'visibility':'on'},{'color':'#9ab9be'}]}],
  gestureHandling: 'greedy',
}

const mapScales = [
  591657550.500000,
  295828775.300000,
  147914387.600000,
  73957193.820000,
  36978596.910000,
  18489298.450000,
  9244649.227000,
  4622324.614000,
  2311162.307000,
  1155581.153000,
  577790.576700,
  288895.288400,
  144447.644200,
  72223.822090,
  36111.911040,
  18055.955520,
  9027.977761,
  4513.988880,
  2256.994440,
  1128.497220]

class CampusInventoryPieMap extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      zoom: 16,
      center: {lat: 21.299693, lng: -157.816757},
    }
  }

  handleZoom({zoom}) {
    if (this.state.zoom !== zoom) 
      this.setState({zoom})
  }

  render() {

    const { buildings } = this.props
    const { zoom, center } = this.state

    if (!buildings.length > 0) {
      return (<div />)
    }

    return (
      <div style={{width:'calc(100% - 5px)', height:'100%', margin: '0 5px 0 0', overflow:'hidden'}}>
        <GoogleMapReact
          bootstrapURLKeys={{key:`${google.key}`}}
          options={mapOptions}
          zoom={zoom}
          center={center}
          onChange={this.handleZoom.bind(this)}>
          {
            buildings
              .filter(b => b.activeMulti)
              .map((b, i) => 
                <MapPie
                  key={`mappie_${i}`}
                  id={b.id}
                  lat={b.lat}
                  lng={b.lng}
                  colors={ncesCategories}
                  radius={Math.sqrt(+b.total_nsf/10) / Math.pow(mapScales[zoom], 1/(zoom-10))}
                  data={[
                    +b.classroom_nsf, 
                    +b.classlab_nsf,
                    +b.openlab_nsf,
                    +b.researchlab_nsf, 
                    +b.officefac_nsf,
                    +b.studyfac_nsf,
                    +b.specialuse_nsf, 
                    +b.generaluse_nsf, 
                    +b.support_nsf, 
                    +b.healthcare_nsf, 
                    +b.residential_nsf, 
                    +b.circulation_nsf,
                    +b.bldgsvc_nsf,
                    +b.mechanical_nsf,
                    +b.unclassified_nsf,
                  ]}
                />
              )
          }
        </GoogleMapReact>
      </div>
    )
  }
}

export default CampusInventoryPieMap

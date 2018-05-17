import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

//google map react documentation: https://github.com/fullstackreact/google-maps-react

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state={
            selectedPlace: {name: "Map"},
            lat: this.props.lat,
            lng: this.props.lng
        }
    }

    render() {
        //first div styles map
        return (
           <div style={{position:"relative", width:"100%", height:"200px"}}>
            <Map
                style={{width: '100%', height: '100%', position: 'relative'}}
                google={this.props.google}
                center={{
                    lat: this.props.lat ,
                    lng: this.props.lng
                }}
                zoom={13}>

                <Marker
                    position={{lat: this.props.lat, lng:this.props.lng}}
                    name={'Current location'}
                            />
            </Map>
           </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBSjHCxvrOJ9vPn9ReAQOchfXblNATQtf8"
})(MapContainer)
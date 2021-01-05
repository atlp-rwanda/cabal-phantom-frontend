import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import '../../assets/styles/map.scss'

export class Maps extends Component {
    render() {
        return (
            <div className="maps">
                <Map
                    google={this.props.google}
                    zoom={16}
                    initialCenter={
                        {
                            lat: -1.9433,
                            lng: 30.0587
                        }
                    }
                >
                    <Marker
                        onClick={this.onMarkerClick}
                        name={'Kigali city'}
                    />
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    //To be used in project work only.
    apiKey: 'AIzaSyCnyTewq67fNs2jyyhbVqEwx2MUPQKpfhk'
})(Maps);

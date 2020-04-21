import React, {Component,createRef} from 'react';
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import './map.scss'

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxlamFuZHJhY2VuaWNlcm9zIiwiYSI6ImNrOTlreDV3dTF0ZHUzZXBnZHQzMjRqNjQifQ.M39Iy0yeNbDNtIFBXZBoUw';

export default class Map extends Component{

    constructor(props){
        super(props);

        this.mapboxElRef = createRef();

        this.state = {
            lng: -102.10232,
            lat: 23.68367,
            zoom: 3.60,
        }
    }

    render() {

        return (
             <div className="mapContainer">
                <div className="mapBox" ref={e => this.mapContainer  = e} />
            </div>
        );
    }
}
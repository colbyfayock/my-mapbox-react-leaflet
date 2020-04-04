import React from 'react';
import { Map, TileLayer } from 'react-leaflet'
import './App.css';
import 'leaflet/dist/leaflet.css';

const accessToken = process.env.REACT_APP_MAPBOX_KEY;
const position = [ 38.9072, -77.0369 ];

function App() {
  return (
    <div className="App">
      <Map center={position} zoom={8}>
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/colbyfayock/ck8lryjfq0jdo1ip9ctmuhc6p/tiles/256/{z}/{x}/{y}@2x?access_token=${accessToken}`}
          attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
        />
      </Map>
    </div>
  );
}

export default App;

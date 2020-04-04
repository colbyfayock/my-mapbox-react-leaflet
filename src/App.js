import React from 'react';
import { Map, TileLayer } from 'react-leaflet'
import './App.css';
import 'leaflet/dist/leaflet.css';

const position = [ 38.9072, -77.0369 ];

function App() {
  return (
    <div className="App">
      <Map center={position} zoom={8}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
      </Map>
    </div>
  );
}

export default App;

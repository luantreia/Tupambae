import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import Page from '../Menu';

  const Mapa () => {
  return (
    <div style={styles.wrapper}>
      <Map style={styles.map} center={props.center} zoom={props.zoom}>
        <TileLayer url={props.url} />
      </Map>
    </div>
  );
}

Moves.defaultProps = {
  center: [27.9361805667694, -15.589599609374998],
  zoom: 10,
  url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png'
};

export default Moves;
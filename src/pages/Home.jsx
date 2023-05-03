
import Footer from '../minicomp/Footer'
import styled from "styled-components";
import "../styles.scss";
import 'leaflet/dist/leaflet.css'
import L from "leaflet";
import React, { useMemo, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";



const Bottom = styled.div`
position:fixed;
bottom:-3%;
width:100%;
color: rgb(255, 255, 255);
`;
const position = [40.928890, -73.894990]

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

const Home = () => {

  const markerRef = useRef();

  const eventHandlers = useMemo(
    () => ({
      mouseover() {
        if (markerRef) markerRef.current.openPopup();
      },
      mouseout() {
        if (markerRef) markerRef.current.closePopup();
      }
    }),
    []
  );
  


  return (
    <>
     <div className='leafletContainer'>
          <MapContainer
            style={{ height: '70%', width: '70%' }}
            center={position}
            
            zoom={12}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png'
            />

            <Marker 
            ref={markerRef}
            position={position}
            icon={icon}
            eventHandlers={eventHandlers}
            >
              <Popup> El Cazador Cafe</Popup>
            </Marker>
          </MapContainer>
        

      </div>
      <Bottom>
  <Footer />
  </Bottom>
      
      </>
  )}

export default Home
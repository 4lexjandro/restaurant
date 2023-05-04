import {motion} from "framer-motion"
import styled from "styled-components";
import 'leaflet/dist/leaflet.css'
import L from "leaflet";
import React, { useMemo, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";





const Location = styled.div`
position:fixed;
bottom:20%;
width:100%;

`;

const position = [40.928890, -73.894990]

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});





const Contact = () => {

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
    


     <div className= "numbers">
    <main className="hours">
    <main className="numbers">


        
      <motion.div
        animate={{ x: 0, y: 100, }}
         transition={{ ease: "easeOut", duration: 2 }}
      >
        
          El Cazador Cafe
          <br/>
        20 Park Hill Ave
        <br/>
        Yonkers, New York, 10701
          <br/>
        <br/>
        <motion.div
      className="box"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      
        <a href = "tel:914-376-0371" className='btn glass px-1 py-1 bg-pink-900 shadow-xl shadow-red-600/20 sm:px-1 btn-md'><p className="glassButton">914 - 376 - 0371</p></a>
          
      
      </motion.div>
      </motion.div>

    </main>



    <div className="mapp">
    <motion.div
        animate={{ x: 10, y: 450, }}
         transition={{ ease: "easeOut", duration: 2 }}
      >



    <Location>
    <div className='leafletContainer'>
          <MapContainer
            style={{ height: '70%', width: '70%' }}
            center={position}
            zoom={14}
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
      </Location>
      </motion.div>
      </div>




      </main>
      </div>
     
        
        
        </>
  )
}

export default Contact
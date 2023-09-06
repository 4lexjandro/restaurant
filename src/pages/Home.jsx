
import "../styles.scss";

import React,  { useMemo, useRef } from "react";
import {motion} from "framer-motion"
import 'leaflet/dist/leaflet.css'
import L from "leaflet";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";



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
    


     <div >
    <main className="box">  
    

   
   
  <div >
    <main className="hours">
    <main className="numbers">


        
      <motion.div
        animate={{ x: 0, y: 100, }}
         transition={{ ease: "easeOut", duration: 1 }}
      >
        
        <h1>El Cazador Cafe</h1>
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


{/* FIX THIS FUCKERY!!!!!!!! */}
    {/* <div className="mapp">
    <motion.div
        animate={{ x: 10, y: 450, }}
         transition={{ ease: "easeOut", duration: 1 }}
      >



    
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
              <Popup> El Cazador Cafe
              </Popup>
            </Marker>
          </MapContainer>
      </div>
      </motion.div>
      </div> */}
      </main>
      </div>
     
    





        
      </main>
      </div>
    
      </>
  )}

export default Home
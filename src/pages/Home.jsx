
import Footer from '../minicomp/Footer'
import styled from "styled-components";
import "../styles.scss";




const Bottom = styled.div`
position:fixed;
bottom:-3%;
width:100%;
color: rgb(255, 255, 255);
`;


const Home = () => {




  return (
    <>
     

      <Bottom>
  <Footer />
  </Bottom>
      
      </>
  )}

export default Home
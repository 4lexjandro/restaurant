import one from '../assets/one.jpg'
import two from '../assets/two.jpg'
import three from '../assets/three.jpg'
import Footer from '../minicomp/Footer'

function Gallery() {
  return (
    <div>
       <div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full">
  <img class="container mx-auto h-96 w-3/4" src={one}/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img class="container mx-auto h-96 w-3/4" src={two}/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
  <img class="container mx-auto h-96 w-3/4" src={three}/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" class="carousel-item relative w-full">
    <img class="container mx-auto h-96 w-3/4" src={two}/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>



<br/>

<div className="bottom"> 
      <Footer />
      </div>











    </div>
  )
}

export default Gallery
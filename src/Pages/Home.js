import React from 'react';
import Carousel from 'nuka-carousel';
import Highlights from '../Components/Highlights';

export default function Home() {
  return (
    <div className="containerHome">
      <div className="carouselContainer" >
       <Carousel >
       {// Aqui van las imagenes del carousel /  Todas las imagenes deben ser del mismo tamaño en este caso 2700*758px
      }
      <img className="imgCarousel"src={"https://img.ltwebstatic.com/images3_ach/2022/09/23/1663923627359e720e935ceab7868a4b03c891a5f0.webp"} alt="lala"/>
      <img className="imgCarousel"src={"https://cdn.shopify.com/s/files/1/0274/2888/0455/files/banner_06d1aee3-5eee-465c-a398-a4d9f8221d9d.jpg?v=1588898603"} alt="lala"/>
       <img className="imgCarousel"src={"https://img.ltwebstatic.com/images3_acp/2022/03/14/16472379265197782268eec38944b78a6c7f47777a.gif"} alt="lala"/>
       <img className="imgCarousel"src={"http://photos.prnewswire.com/prnfull/20141017/152914LOGO?p=publish"} alt="lala"/>
     </Carousel>
     </div>
     <Highlights />
    </div>
  );
}

import React from 'react';
import Carousel from 'nuka-carousel';

export default function Home() {
  return (
    <div className="containerHome">
      <h1>Home</h1>
      <div className="carouselContainer" >
       <Carousel >
       <img src={"https://7483c243aa9da28f329c-903e05bc00667eb97d832a11f670edad.ssl.cf1.rackcdn.com/1018520_1-FvWii0Ub-medium.jpg"} alt="lala"/>
       <img src={"https://7483c243aa9da28f329c-903e05bc00667eb97d832a11f670edad.ssl.cf1.rackcdn.com/1018520_1-FvWii0Ub-medium.jpg"} alt="lala"/>
       <img src={"https://7483c243aa9da28f329c-903e05bc00667eb97d832a11f670edad.ssl.cf1.rackcdn.com/1018520_1-FvWii0Ub-medium.jpg"} alt="lala"/>
       <img src={"https://7483c243aa9da28f329c-903e05bc00667eb97d832a11f670edad.ssl.cf1.rackcdn.com/1018520_1-FvWii0Ub-medium.jpg"} alt="lala"/>
     </Carousel>
     </div>
    </div>
  );
}

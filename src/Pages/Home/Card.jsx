import './cards.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Card() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => setMyData(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='cantainer-card' >
    {myData.map((data) => (
    <div className="card">
    <img src={data.image} alt="Indresh" className="photoset" />
    <div className="container ">
      <h4 className="hname">{data.title}</h4>
      <p className="pname">{data.price}</p>
    </div>
    <div className="">
   
    <button className="custom_buttonb">Add To Cart</button>
    <button className="custom_buttonb">Buy</button>
    </div>
  </div>
   ))}
      </div>
  );
}

export default Card;



//   <div className="card">
//     <img src={photo2} alt="Indresh" className="photoset" />
//     <div className="container ">
//       <h4 className="hname">Indresh Bharati</h4>
//       <p className="pname">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//       </p>
//     </div>
//   </div>
//   <div className="card">
//     <img src={photo3} alt="Indresh" className="photoset" />
//     <div className="container ">
//       <h4 className="hname">Indresh Bharati</h4>
//       <p className="pname">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//       </p>
//     </div>
//   </div>
//   <div className="card">
//     <img src={photo4} alt="Indresh" className="photoset" />
//     <div className="container ">
//       <h4 className="hname">Indresh Bharati</h4>
//       <p className="pname">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//       </p>
//     </div>
//   </div>
//   <div className="card">
//     <img src={photo4} alt="Indresh" className="photoset" />
//     <div className="container ">
//       <h4 className="hname">Indresh Bharati</h4>
//       <p className="pname">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//       </p>
//     </div>
//   </div>
//   <div className="card">
//     <img src={photo5} alt="Indresh" className="photoset" />
//     <div className="container ">
//       <h4 className="hname">Indresh Bharati</h4>
//       <p className="pname">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//       </p>
//     </div>
//   </div>
//   <div className="card">
//     <img src={photo6} alt="Indresh" className="photoset" />
//     <div className="container ">
//       <h4 className="hname">Indresh Bharati</h4>
//       <p className="pname">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//       </p>
//     </div>
//   </div>
//   <div className="card">
//     <img src={photo2} alt="Indresh" className="photoset" />
//     <div className="container ">
//       <h4 className="hname">Indresh Bharati</h4>
//       <p className="pname">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//       </p>
//     </div>
//   </div>
// </div>
      

// export default Card;

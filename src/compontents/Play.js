import React from 'react'
import { useCart } from "react-use-cart";
import AudioPlayer from 'react-h5-audio-player';
import {Link} from 'react-router-dom'
import Navbar from './Navbar';
function Play(props) {
  const {
    items,
    removeItem,

  } = useCart();
  return (
  <> <Navbar/>
<div id="playimg"  style={{ "height": "100vh" }}className="container-fluid">
        <div id="mainMovieDiv" class="row row-cols-1 row-cols-xl-4 row-cols-md-3 row-cols-sm-2 g-4 m-1">
          {items.map((item, index) => {
            return (
              <div className="col movie" key={index}>
                <div className="card" style={{ width: "18rem;" }}>

                  <img src={item.img} className="card-img-top mx-auto mt-3 img-rounded" alt="..." />

                  <div className="card-body">
                    <div><i className="fa-solid fa-heart" onClick={() => removeItem(item.id)}></i>
                    </div>
                    <h5 className="card-title text-center">{item.title}</h5>

                    <marquee Scrolldelay={120}>
                      {item.artist}
                    </marquee>
                    <div id="playbar">
                      <AudioPlayer
                        autoPlay
                        src={item.mp3} />
                    </div>
                  </div>
                </div>
              </div>);
          })}
        </div>
      </div>
</>

  );
}


export default Play

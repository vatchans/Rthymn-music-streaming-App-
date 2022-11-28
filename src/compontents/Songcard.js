import React from 'react'
import { useCart } from "react-use-cart";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
function Songcard(props) {
    const { addItem } = useCart();
    return <> 
    <div className="col movie" key={props.id}>
            <div className="card" style={{ width: "18rem;" }}>

                <img src={props.img} className="card-img-top mx-auto mt-3 ml-5 img-rounded" alt="..." />

                <div className="card-body">
                    <div><i className="fa-solid fa-heart" onClick={() => addItem(props.item)}></i>
                    </div>
                    <h5 className="card-title text-center">{props.title}</h5>

                    <marquee Scrolldelay={120}>
                        {props.artist}
                    </marquee>
                    <div id="playbar">
                        <AudioPlayer
                          
                            src={props.mp3} />
                    </div>
                </div>
            </div>
            </div>
        </>
}

        export default Songcard
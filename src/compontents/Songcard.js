import React from 'react'
import { useState } from 'react';
import { useCart } from "react-use-cart";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Heart from "react-heart"
import { ToastContainer, toast } from 'react-toastify';
function Songcard(props) {
    const { addItem } = useCart();
    const [active, setActive] = useState(false)
    const notify = () => {
        toast.success('Song Added to your Playlist', {
            toastId: 'success1',
        })
    }
    return <>
        <div className="col movie" key={props.id}>
            <div className="card" style={{ width: "18rem;" }}>

                <img src={props.img} className="card-img-top mx-auto mt-3 ml-5 img-rounded" alt="..." />

                <div className="card-body">
                    <div className='heart'>
                        <Heart isActive={active} onClick={() =>{{notify()}
                            setActive(!active)
                            addItem(props.item)}} />
                            <ToastContainer closeButton={false} autoClose={500} />
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

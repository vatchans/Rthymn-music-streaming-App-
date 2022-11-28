import React, { useState} from 'react'
import 'react-h5-audio-player/lib/styles.css';
import Songs from './Songs';
import Songcard from './Songcard';
import Navbar from './Navbar';
function Allsongs() {
// console.log(Songs.Setsongs)
    const [searchterm, setsearchterm] = useState("");
    return <>
    <Navbar></Navbar>
        <div id="als" style={{"height":"600vh"}}className="container-fluid">
                <div className='container'>
                    <form id="form">
                        <input id="searchbar" class="form-control me-2" type="text" placeholder="Search" aria-label="Search" onChange={(event) => { setsearchterm(event.target.value); } } />
                    </form>
                </div>
            <div id="mainMovieDiv" class="row row-cols-1 row-cols-xl-4 row-cols-md-3 row-cols-sm-2 g-5 m-1">

                {Songs.Setsongs.filter((item) => {
                    if (searchterm === "") {
                        return item;
                    } else if (item.title.toLowerCase().includes(searchterm.toLowerCase())) {
                        return item;
                    }
                }).map((item, index) => {
                    return <Songcard
                        img={item.img}
                        mp3={item.mp3}
                        title={item.title}
                        artist={item.artist}
                        price={item.price}
                        key={index}
                        item={item} />;

                })}

            </div>
        </div>
   
    </>

}


export default Allsongs
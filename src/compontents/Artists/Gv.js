import React from 'react'
import Songs from '../Songs'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
function Gv() {
  return <>
  <div id="als" style={{ "height": "100vh" }} className="container-fluid">
      <div id="mainMovieDiv" class="row row-cols-1 row-cols-xl-4 row-cols-md-3 row-cols-sm-2 g-5 m-1">
          {Songs.Setsongs.filter((e) =>{return e.artist.includes("G.V. Prakash Kumar")}
          ).map((e) => {

              return <div className="col movie" key={e.id}>
                  <div className="card" style={{ width: "18rem;" }}>

                      <img src={e.img} className="card-img-top mx-auto mt-3 ml-5 img-rounded" alt="..." />

                      <div className="card-body">
                          <div><i className="fa-solid fa-heart"></i>
                          </div>
                          <h5 className="card-title text-center">{e.title}</h5>

                          <marquee Scrolldelay={120}>
                              {e.artist}
                          </marquee>
                          <div id="playbar">
                              <AudioPlayer

                                  src={e.mp3} />
                          </div>

                      </div>
                  </div>
              </div>})
          }
      

      </div>
  </div>
</>
}

export default Gv
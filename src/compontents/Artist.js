import React from 'react'
import { Outlet,NavLink } from 'react-router-dom'
import Navbar from './Navbar'
function Artist() {
  return (<>
   <Navbar/>
    <div className='container-fluid'>
    <div className='artistlist'>
       <div className="artist"> <NavLink to="Ar"><img src="/songs/images.jpg"/></NavLink></div>
        <div className='artist'><NavLink to="U1"><img src="/songs/download.jpg"/></NavLink></div>
        <div className='artist'><NavLink to="A"><img src="/songs/anirudh_ravichander_to_go_live_on_youtube_tonight_to_entertain_his_fans_amid_covid_19_lockdown.jpeg"/></NavLink></div>
        <div className='artist'><NavLink to="Eminem"><img src="/songs/eminem.jpg"/></NavLink></div>
        <div className='artist'><NavLink to="justin"><img src="/songs/justin.jpg"/></NavLink></div>
        <div className='artist'><NavLink to="Gv"><img src="/songs/gv prakash.jpg"/></NavLink></div>
        </div>
        <Outlet/>
    </div>
    </>
  )
}

export default Artist
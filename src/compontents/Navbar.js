import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (<>
    <nav class="navbar">
      <div class="container-fluid">
         <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">&#127911;</button> 
        <div class="navbar-brand">
       <img src="/A.png" alt="" width="60" height="60" class="d-inline-block align-text-center" />&nbsp;&nbsp;&nbsp;
         <span >Rthymn</span>&nbsp;&nbsp;<span id="slogan">stream music anywhere</span><span><img src="/songs/6pkB.gif" width={"8%"} 
         /></span>
        </div>
      </div>
    </nav>
    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel"></h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div div class="offcanvas-body">
        <NavLink to="/playlist"><p>Playlist</p></NavLink>
        <NavLink to="/Songs"> <p>Song library</p></NavLink>
        <div className="drop">
          <p>Geners</p>
          <div className="menu">
            <ul>
              <NavLink to="/melody"><li>Melody</li></NavLink>
              <NavLink to="/folk"><li>Folk</li></NavLink>
              <NavLink to="/rap"><li >Rap</li></NavLink>
              <NavLink to="/pop"><li>pop</li></NavLink>
            </ul>
          </div>
        </div>
        <NavLink to="/artist"> <p>Artists</p></NavLink>
      </div>
    </div>
  </>
  )
}

export default Navbar

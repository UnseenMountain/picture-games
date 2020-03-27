import React from "react";
// import "tachyons";

const style = {
  bgLight: {
    backgroundColor: `rgb(1,0,1)`


  }
}

const NavBar = props => (
  <header style={style.bgLight} className=" w-100 ph3 pv3 pv2-ns ph4-m ph5-l tc">
    <nav className="f6 fw6 ttu tracked">
      <p className="link  white dib mr3"  title="Home">The Game</p>
      <p className="link  white dib mr3" >Status: {props.status}</p>
      <p className="link  white dib mr3" title="Store">Score: {props.currentScore}</p>
      <p className="link  white dib" title="Contact">Top Score: {props.topScore}</p>
    </nav>
  </header>
)

export default NavBar;
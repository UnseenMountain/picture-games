import React from 'react';

const style = {
  logoIcon: {
    width: 150,
    heigth: 100
  },
  bgDark: {
    backgroundColor: `rgb(1,0,1)`,
    TextColor: "rgb(255, 255, 255)"
  }
}

const Banner = props => (
  <article style={style.bgDark} className="sd">
    <img style={style.logoIcon} className='logoIcon' src="./gif/destiny dance.gif" alt="destiny"/>
    <h2 className="ds">
    Click on an image to earn points, but don't click on any more than once!
    </h2>
  </article>
);

export default Banner;
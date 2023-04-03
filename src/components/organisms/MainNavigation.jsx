import React from 'react';
import dreamlightLogo from '../../assets/images/dreamlight_transparent_logo.png';

function MainNavigation() {
  return (
    <header className="w-full h-24 bg-transparent absolute top-0 z-10 flex flex-row items-center justify-center">
      <div className="w-1/10 h-full"></div> {/*For hamburger dropdown icon*/}
      <div className="hidden w-25/100 h-full md:block "></div>
      {/*For three list elements for nav*/}
      <div className="w-90/100 h-full  flex justify-center items-center md:w-30/100">
        <img
          className="h-20 sm: md:h-20 2xl:h-32"
          src={dreamlightLogo}
          alt="logo"
          draggable="false"
        ></img>
      </div>
      <div className="hidden w-35/100 h-full md:block"></div>
      {/*For three list elements for nav*/}
    </header>
  );
}

export default MainNavigation;

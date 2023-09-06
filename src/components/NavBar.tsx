import React from 'react';
import { logo, map, mapActive, time, timeActive } from '../assets';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
  const location = useLocation().pathname.slice(1);
  const isMap = location === 'map' ? true : false;

  return (
    <div className="w-[250px] h-[100vh] bg-white px-5 py-10 shadow-lg">
      <img src={logo} alt="logo" />
      <hr className="mt-5 mb-5" />

      <nav className="flex flex-col gap-3">
        <NavLink to="/schedule">
          <div className="flex align-middle gap-2">
            <img className="w-4" src={isMap ? time : timeActive} alt="schedule" />
            <h1 className={`${isMap ? 'opacity-50' : 'font-bold'} text-lg`}>
              Расписание
            </h1>
          </div>
        </NavLink>

        <NavLink to="/map">
          <div className="flex align-middle gap-2">
            <img className="w-4" src={isMap ? mapActive : map} alt="map" />
            <h1 className={`${isMap ? 'font-bold' : 'opacity-50'} text-lg`}>Карта</h1>
          </div>
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;

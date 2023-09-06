import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="max-w-lg bg-white px-5 py-6 mr-auto ml-auto text-2xl flex flex-col text-center mt-80">
        <h1 className="mb-5">Добро пожаловать в Ship Tracker</h1>
        <div className="flex gap-10 justify-center">
          <NavLink to="/map">
            <button className="py-2 px-6 bg-blue-500 rounded text-lg text-white hover:bg-black transition-all">
              Карта
            </button>
          </NavLink>

          <NavLink to="/schedule">
            <button className="py-2 px-6 bg-blue-500 rounded text-lg text-white hover:bg-black transition-all">
              Гант Чарт
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;

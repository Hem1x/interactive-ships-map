import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Schedule from './page/Schedule';
import InteractiveMap from './page/InteractiveMap';
import Home from './page/Home';
import { useState } from 'react';
import Form from './components/Form';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-sky-100 flex">
      {open && <Form setOpen={setOpen} />}
      <NavBar />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<InteractiveMap />} />
          <Route path="/schedule" element={<Schedule setOpen={setOpen} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

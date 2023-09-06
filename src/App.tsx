import React, { useEffect, useState } from 'react';
import InteractiveMap from './components/InteractiveMap';
import axios from 'axios';

const App = () => {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   (async function () {
  //     try {
  //       const response = await axios.get('http://alexbobr.ru:8000/');
  //       setData(response.data);
  //     } catch (error) {
  //       console.log((error as Error).message);
  //     }
  //   })();
  // }, []);

  // console.log(data);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <InteractiveMap />
    </div>
  );
};

export default App;

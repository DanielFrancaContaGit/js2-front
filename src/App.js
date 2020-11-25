import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState();


  const getInformation = async () => {
    const baseUrl = 'http://localhost:3333/'

    const result = await axios.get(`${baseUrl}users`);

    setData(result.data);
  }

  useEffect(() => {
    getInformation();
  }, [])


  return (
    <div className="App">
      {data ? (
        <>
          <h1>Usuário</h1>
          <p>{`User name ${data.name}`}</p>
          <p>{`User age ${data.age}`}</p>
          <p>{`User course ${data.course}`}</p>
        </>
      ) : false}

    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";


function App() {
  const[coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);
      console.log(res.data);
    }).catch( error => console.log(error));
  },[])

  const handleChange = e =>{
    setSearch(e.target.value);
  }

  return (
    <div className="coin">
      <div className="coin__search">
      <h1 className="coin__text">Search A currency</h1>
      <form>
        <input type="text" placeholder="Search" onChange={handleChange}/>
      </form>
      </div>
      
      
    </div>
  );
}

export default App;

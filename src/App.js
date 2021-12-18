import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Coin from './Coin'
import './App.css'
function App() {
  const [coins, setcoins] = useState([])
  const [search, setsearch] = useState('')
  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false',
      )
      .then((res) => {
        setcoins(res.data)
        // console.log(res.data)
      })
      .catch((error) => alert('you lost du'))
    return () => {}
  }, [])
  const handlechange = (e) => {
    setsearch(e.target.value)
  }
  const filtercoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase()),
  )
  return (
    <div>
      <div className="coin-app">
        <div className="coin-search">
          <h1 className="coin-text">
            Cypto Watch{' '}
            <span style={{ fontSize: '15px', color: 'red' }}>Beta </span>
          </h1>
          <form>
            <input
              onChange={handlechange}
              type="text"
              placeholder="Enter the Name of Crypto/Token"
              className="coin-input"
            />
          </form>
        </div>
        {filtercoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              idname={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App

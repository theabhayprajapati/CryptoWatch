import React from 'react'
import './Coin.css'
const Coin = ({
  image,
  idname,
  symbol,
  volume,
  price,
  marketcap,
  priceChange,
}) => {
  return (
    <div>
      <div className="cointainer">
        <div className="coin-row">
          <div className="coin">
            <img src={image} alt="/crypto" />
            <h1>
              {idname}
              <p className="coin-symbol">{symbol}</p>
            </h1>
            <p className="coin-symbol">{symbol}</p>
          </div>
          <div className="coin-data">
            <p className="coin-price">₹{price}</p>
            <p className="coin-volume">₹{volume.toLocaleString()}</p>
            {priceChange < 0 ? (
              <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
            )}
            <p className="coin-marketcap">
              Mkt Cap: ₹{marketcap.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coin

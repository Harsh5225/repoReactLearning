import React from "react";


const BitcoinCard = ({ coin }) => {
  return (
    <div className="card">
      <img src={coin.image} alt={coin.name} className="coin-image" />
      <h3>{coin.name}</h3>
      <p>Price: ${coin.current_price}</p>
      <p>Market Cap Rank: {coin.market_cap_rank}</p>
    </div>
  );
};

export default BitcoinCard;
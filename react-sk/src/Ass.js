import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Ass() {
 
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  
  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          'https://api.coinpaprika.com/v1/tickers',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 50,
              page: 1,
              sparkline: false,
            },
          }
        );
        setCoins(response.data);
        setError('');
      } catch (err) {
        console.error("Error fetching crypto data:", err);
        setError('Failed to fetch data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, []);

  // Update search state on input change
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="crypto-app">
      <header className="crypto-header">
        <h1>Crypto Price Tracker</h1>
        <input
          type="text"
          placeholder="Search for a coin (e.g., Bitcoin)..."
          className="crypto-search"
          onChange={handleSearchChange}
        />
      </header>

      {loading && <div className="loader">Loading market data...</div>}
      {error && <div className="error-message">{error}</div>}

      {!loading && !error && (
        <div className="table-container">
          <table className="crypto-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Coin</th>
                <th>Price (USD)</th>
                <th>24h Change</th>
                <th>Market Cap</th>
              </tr>
            </thead>
            <tbody>
              {filteredCoins.map((coin) => {
                const isPriceDrop = coin.price_change_percentage_24h < 0;
                return (
                  <tr key={coin.id}>
                    <td>{coin.market_cap_rank}</td>
                    <td className="coin-info">
                      <img src={coin.image} alt={coin.name} className="coin-logo" />
                      <span className="coin-name">{coin.name}</span>
                      <span className="coin-symbol">{coin.symbol.toUpperCase()}</span>
                    </td>
                    <td>${coin.current_price.toLocaleString()}</td>
                    <td className={isPriceDrop ? 'price-down' : 'price-up'}>
                      {coin.price_change_percentage_24h?.toFixed(2)}%
                    </td>
                    <td>${coin.market_cap.toLocaleString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Ass;

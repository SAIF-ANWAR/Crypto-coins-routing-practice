// import React, {  } from 'react';
import React, { useState, useEffect } from 'react';
import CoinCard from '../Coin-card/CoinCard';

const Coins = () => {
    const [coins, setCoints] = useState([])
    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=50&page=1&sparkline=false')
            .then(res => res.json())
            .then(data => setCoints(data))
    }, [])
    return (
        <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <p className='text-center text-3xl font-bold text-gray-500'> Available Crypto Currencies</p>
            <p className='text-center text-xl font-normal text-gray-500 pb-6'> Total Coints: {coins.length}</p>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center'>
                {
                    coins.map(coin => <CoinCard key={coin.id} coin={coin} />)
                }
            </div>
        </div>
    );
};

export default Coins;
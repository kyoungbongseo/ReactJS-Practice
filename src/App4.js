import { useEffect, useState } from "react";

function App4() {
	const [loading, setLoading] = useState(true);
	const [coins, setCoins] = useState([]);

	useEffect(() => {
		//{{
		/*
		fetch(`https://api.coinpaprika.com/v1/tickers`)
			.then((response) => response.json())
			.then((json) => {
				//console.log(json);
				setCoins(json);
				setLoading(false);
			});
		*/
		setTimeout(() => {
			setCoins([
				{ name: "ACoin", symbol: "A$", quotes: { USD: { price: "10000" } } },
				{ name: "BCoin", symbol: "B$", quotes: { USD: { price: "10000" } } },
			]);
			setLoading(false);
		}, 1000);
		////////////////////}}
	}, []);

	/*
	return (
		<div>
			<h1>The Coins! ({coins.length})</h1>
			{loading ? <strong>Loading...</strong> : null}
			<ul>
				{coins.map((coin) => {
					console.log(`Coin.index = ${coins.indexOf(coin)}`);
					return (
						<li key={coins.indexOf(coin)}>
							{coin.name} ({coin.symbol}) : $ {coin.quotes.USD.price}
						</li>
					);
				})}
			</ul>
		</div>
	);
	*/
	/*
	return (
		<div>
			<h1>The Coins! ({coins.length})</h1>
			{loading ? <strong>Loading...</strong> : null}
			<select>
				{coins.map((coin) => (
					<option key={coins.indexOf(coin)}>
						{coin.name} ({coin.symbol}) : $ {coin.quotes.USD.price}
					</option>
				))}
			</select>
		</div>
	);
	*/
	return (
		<div>
			<h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
			{loading ? (
				<strong>Loading...</strong>
			) : (
				<select>
					{coins.map((coin) => (
						<option key={coins.indexOf(coin)}>
							{coin.name} ({coin.symbol}) : $ {coin.quotes.USD.price}
						</option>
					))}
				</select>
			)}
		</div>
	);
}

export default App4;

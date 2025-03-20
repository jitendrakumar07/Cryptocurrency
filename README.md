# Cryptocurrency Tracker

A real-time cryptocurrency tracking application that displays market data for top cryptocurrencies.

🔗 **Live Demo:** [Cryptocurrency Tracker](https://cryptocurrencies-eight.vercel.app/)

## Features

- Real-time cryptocurrency data from CoinGecko API
- Search functionality by cryptocurrency name or symbol
- Sort cryptocurrencies by:
  - Market Cap
  - Percentage Change (24h)
- Display key metrics:
  - Current Price
  - 24h Price Change
  - Market Cap
  - Trading Volume
- Visual indicators for price changes (green/red)
- Cryptocurrency icons
- Responsive design

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- CoinGecko API

## API Integration

The application uses the CoinGecko API v3 endpoint:
```https:%2F%2Fapi.coingecko.com%2Fapi%2Fv3%2Fcoins%2Fmarkets%60%60%60

Data refreshes on page load and includes:
- Top 10 cryptocurrencies by market cap
- USD currency pairing
- 24-hour price change data

## Key Functions

1. **Data Fetching**
   - Fetches real-time data from CoinGecko API
   - Error handling for API requests

2. **Search Functionality**
   - Case-insensitive search
   - Filters by both name and symbol
   - Real-time filtering as you type

3. **Sorting Features**
   - Market Cap sorting (highest to lowest)
   - 24h Price Change sorting (highest to lowest)

## Local Development

1. Clone the repository
2. Open `index.html` in your browser
3. No build process required

## Deployment

This project is deployed on Vercel. To deploy your own version:

1. Fork this repository
2. Create a Vercel account
3. Connect your repository to Vercel
4. Deploy

## Future Enhancements

- Add more cryptocurrencies to the list
- Implement real-time price updates
- Add historical price charts
- Include additional sorting options
- Add portfolio tracking features

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Data provided by [CoinGecko API](https://www.coingecko.com/en/api)
- Deployed with [Vercel](https://vercel.com)
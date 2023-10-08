# **Stock Market App**

A stock market app has built with Alpha Vantage API. The app allows users to search for stock quotes and display their data in a new view.

### Demo: [Link](https://stock-market-app-brown.vercel.app/)

## How run from local repository

1. Clone the repository
2. Run `npm install` command in your terminal
3. Create .env file and add a new enviromental variable named VITE_ALPHA_VANTAGE_API_KEY and add your own api key to this file
4. Run `npm run dev` command in your terminal
5. Server running at `http://localhost:5173/`

## Features

- Allow user to search stock market data
- [Alpha Vantage API](https://www.alphavantage.co/) has used to obtain the data for the stocks
- There are three views: a search view, a detail view and a favourite view
- The search view allow users to search for a stock by entering its symbol or name
- The detail view display information about the selected stock, including its name, symbol, current price,
  and any other relevant data that can obtain from Alphavantage. Additionaly, user can add this stock to the favourites based on the stock's symbol
- The favourite view displays the favourites that use previously added to the list and also can get the latest stock market data if click on a symbol
- LocalStorage used to store the favourite stocks
- HighChart API used to display stock price data on a chart
- Hosted on Vercel
- Responsive design

### Dependencies

- [React](https://react.dev/)
- [React Router DOM](https://www.npmjs.com/package/react-router-dom)
- [React Icons](https://www.npmjs.com/package/react-icons)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Alpha Vantage API](https://www.alphavantage.co/documentation/)
- [highchart](https://github.com/highcharts/highcharts)
- [highchart-react-official](https://github.com/highcharts/highcharts-react)
- [Highchart API](https://api.highcharts.com/highstock/)

### Layout

![layout-1 picture](https://github.com/ev0clu/stock-market-app/blob/main/layout-1.png?raw=true)
![layout-2 picture](https://github.com/ev0clu/stock-market-app/blob/main/layout-2.png?raw=true)
![layout-3 picture](https://github.com/ev0clu/stock-market-app/blob/main/layout-3.png?raw=true)

# **Stock Market App**

A stock market app has built with Alpha Vantage API. The app allows users to search for stock quotes and display their data in a new view.

### Demo: [Link](https://ev0clu.github.io/stock-market-app/)

## How run from local repository

1. Clone the repository
2. Run `npm install` command in your terminal
3. Create .env file and add a new enviromental variable named VITE_ALPHA_VANTAGE_API_KEY and add your own api key to this file
4. Run `npm run dev` command in your terminal
5. Server running at `http://localhost:5173/`

## Features

- Allow user to search stock market data
- [Alpha Vantage Api](https://www.alphavantage.co/) has used to obtain the data for the stocks
- There are two views: a search view and a detail view
- The search view should allow users to search for a stock by entering its symbol or name
- The detail view should display information about the selected stock, including its name, symbol, current price,
  and any other relevant data you can obtain from Alphavantage
- Responsive design

### Dependencies

- [React](https://react.dev/)
- [React Router DOM](https://www.npmjs.com/package/react-router-dom)
- [React Icons](https://www.npmjs.com/package/react-icons)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Alpha Vantage API](https://www.alphavantage.co/documentation/)

### Layout

![layout picture](https://github.com/ev0clu/stock-market-app/blob/main/layout.png?raw=true)

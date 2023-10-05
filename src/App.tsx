import { Outlet } from 'react-router-dom';
import AppContext from './context/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [stockData, setStockData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputValue(e.target.value);
  };

  const handleSearch = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault;
    fetchStockData();
  };

  const fetchStockData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `
          https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${inputValue}&interval=5min&apikey=${
            import.meta.env.VITE_ALPHA_VANTAGE_API_KEY
          }`
      );

      const jsonData = await response.json();

      setStockData(jsonData);

      setIsLoading(false);
    } catch (error) {
      console.log('Error occurred during data fetch:', error);
    }
  };

  return (
    <>
      <Header />
      <AppContext.Provider
        value={{
          handleSearch,
          handleInputChange,
          stockData,
          inputValue,
          isLoading
        }}
      >
        <Outlet />
      </AppContext.Provider>
      <Footer />
    </>
  );
}

export default App;

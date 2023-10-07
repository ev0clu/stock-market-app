import { Outlet, useNavigate } from 'react-router-dom';
import AppContext from './context/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

const companyInformations = {
  'Meta Data': {
    '1. Information': '',
    '2. Symbol': '',
    '3. Last Refreshed': '',
    '4. Output Size': '',
    '5. Time Zone': ''
  },
  'Time Series (Daily)': {
    '2023-10-06': {
      '1. open': '',
      '2. high': '',
      '3. low': '',
      '4. close': '',
      '5. volume': ''
    }
  }
};

function App() {
  const navigate = useNavigate();

  const [stockData, setStockData] = useState({ bestMatches: [] });
  const [stockCompanyData, setStockCompanyData] = useState(
    companyInformations
  );
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [stockError, setStockError] = useState(false);
  const [favourite, setFavourite] = useState<string[]>([]);
  const [isRestoredLocalStorage, setIsRestoredLocalStorage] =
    useState(false);

  useEffect(() => {
    restoreLocalStorage();
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [stockData, stockCompanyData]);

  useEffect(() => {
    if (isRestoredLocalStorage) {
      saveLocalStorage();
    }
  }, [favourite, isRestoredLocalStorage]);

  const saveLocalStorage = () => {
    localStorage.setItem('data-stock', JSON.stringify(favourite));
  };

  const restoreLocalStorage = () => {
    const storageData = localStorage.getItem('data-stock');

    setFavourite(storageData ? JSON.parse(storageData) : []);

    setIsRestoredLocalStorage(true);
  };

  const resetContext = () => {
    setStockData({ bestMatches: [] });
    setStockCompanyData(companyInformations);
    setInputValue('');
    setIsLoading(false);
    setStockError(false);
  };

  const handleFavouriteAdd = (e: React.MouseEvent<HTMLElement>) => {
    const companySymbol = e.currentTarget.getAttribute('data-symbol');

    setFavourite((prevVal) => [...prevVal, companySymbol!]);
  };

  const handleFavouriteRemove = (
    e: React.MouseEvent<HTMLElement>
  ) => {
    const companySymbol = e.currentTarget.getAttribute('data-symbol');

    setFavourite((prevArray) =>
      prevArray.filter((item) => item !== companySymbol)
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputValue(e.target.value);
  };

  const handleSearch = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault;
    resetContext();
    fetchSearchEndpointData();
  };

  const handleInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Enter' && inputValue !== '') {
      resetContext();
      fetchSearchEndpointData();
    }
  };

  const handleDetails = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault;
    navigate('/details');
    const companySymbol = e.currentTarget.getAttribute('data-symbol');

    fetchCompanyStockData(companySymbol!);
  };

  const fetchSearchEndpointData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `
      https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${inputValue}&apikey=${
        import.meta.env.VITE_ALPHA_VANTAGE_API_KEY
      }`
      );

      const jsonData = await response.json();

      setStockData(jsonData);

      if (
        'Error Message' in jsonData ||
        'Information' in jsonData ||
        'Note' in jsonData
      ) {
        setStockError(true);
      }

      if ('bestMatches' in jsonData) {
        if (jsonData.bestMatches.length === 0) {
          setStockError(true);
        }
      }
    } catch (error) {
      setStockError(true);
      setIsLoading(false);
      console.log('Error occurred during data fetch:', error);
    }
  };

  const fetchCompanyStockData = async (companySymbol: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `
            https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${companySymbol}&apikey=${
              import.meta.env.VITE_ALPHA_VANTAGE_API_KEY
            }`
      );

      const jsonData = await response.json();

      if (
        'Error Message' in jsonData ||
        'Information' in jsonData ||
        'Note' in jsonData
      ) {
        setStockError(true);
      }

      setStockCompanyData(jsonData);
    } catch (error) {
      setStockError(true);
      setIsLoading(false);
      console.log('Error occurred during data fetch:', error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <AppContext.Provider
        value={{
          handleSearch,
          handleInputKeyDown,
          handleInputChange,
          handleDetails,
          resetContext,
          handleFavouriteAdd,
          handleFavouriteRemove,
          stockData,
          stockCompanyData,
          inputValue,
          isLoading,
          stockError,
          favourite
        }}
      >
        <Outlet />
      </AppContext.Provider>
      <Footer />
    </div>
  );
}

export default App;

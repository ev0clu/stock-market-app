import { createContext } from 'react';

type AppContextType = {
  handleSearch: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleInputKeyDown: (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDetails: (e: React.MouseEvent<HTMLButtonElement>) => void;
  resetContext: () => void;
  handleFavouriteAdd: (
    e: React.MouseEvent<HTMLButtonElement>
  ) => void;
  handleFavouriteRemove: (
    e: React.MouseEvent<HTMLButtonElement>
  ) => void;
  stockData: {
    bestMatches: {
      '1. symbol': string;
      '2. name': string;
    }[];
  };
  stockCompanyData: {
    'Meta Data': {
      '1. Information': string;
      '2. Symbol': string;
      '3. Last Refreshed': string;
      '4. Output Size': string;
      '5. Time Zone': string;
    };
    'Time Series (Daily)': {
      [date: string]: {
        '1. open': string;
        '2. high': string;
        '3. low': string;
        '4. close': string;
        '5. volume': string;
      };
    };
  };
  inputValue: string;
  isLoading: boolean;
  stockError: boolean;
  favourite: string[];
};

const AppContext = createContext<AppContextType>({
  handleSearch: () => {},
  handleInputKeyDown: () => {},
  handleInputChange: () => {},
  handleDetails: () => {},
  resetContext: () => {},
  handleFavouriteAdd: () => {},
  handleFavouriteRemove: () => {},
  stockData: { bestMatches: [] },
  stockCompanyData: {
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
  },
  inputValue: '',
  isLoading: false,
  stockError: false,
  favourite: []
});

export default AppContext;

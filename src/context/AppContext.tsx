import { createContext } from 'react';

type AppContextType = {
  handleSearch: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDetails: (e: React.MouseEvent<HTMLButtonElement>) => void;
  resetContext: () => void;
  stockData: {
    bestMatches: {
      '1. symbol': string;
      '2. name': string;
    }[];
  };
  stockCompanyData: object;
  inputValue: string;
  isLoading: boolean;
  stockError: boolean;
};

const AppContext = createContext<AppContextType>({
  handleSearch: () => {},
  handleInputChange: () => {},
  handleDetails: () => {},
  resetContext: () => {},
  stockData: { bestMatches: [] },
  stockCompanyData: {},
  inputValue: '',
  isLoading: false,
  stockError: false
});

export default AppContext;

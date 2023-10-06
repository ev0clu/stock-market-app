import { createContext } from 'react';

type AppContextType = {
  handleSearch: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  stockData: {
    bestMatches: {
      '1. symbol': string;
      '2. name': string;
    }[];
  };
  inputValue: string;
  isLoading: boolean;
};

const AppContext = createContext<AppContextType>({
  handleSearch: () => {},
  handleInputChange: () => {},
  stockData: { bestMatches: [] },
  inputValue: '',
  isLoading: false
});

export default AppContext;

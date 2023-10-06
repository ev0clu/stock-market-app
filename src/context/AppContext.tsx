import { createContext } from 'react';

type AppContextType = {
  handleSearch: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  resetContext: () => void;
  stockData: {
    bestMatches: {
      '1. symbol': string;
      '2. name': string;
    }[];
  };
  inputValue: string;
  isLoading: boolean;
  stockError: boolean;
};

const AppContext = createContext<AppContextType>({
  handleSearch: () => {},
  handleInputChange: () => {},
  resetContext: () => {},
  stockData: { bestMatches: [] },
  inputValue: '',
  isLoading: false,
  stockError: false
});

export default AppContext;

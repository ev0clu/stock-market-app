import { createContext } from 'react';

type AppContextType = {
  handleSearch: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  stockData: {
    [key: string]: string;
  };
  inputValue: string;
  isLoading: boolean;
};

const AppContext = createContext<AppContextType>({
  handleSearch: () => {},
  handleInputChange: () => {},
  stockData: {},
  inputValue: '',
  isLoading: false
});

export default AppContext;

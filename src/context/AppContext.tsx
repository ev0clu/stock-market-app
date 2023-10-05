import { createContext } from 'react';

type AppContextType = {
  handleSearch: (e: React.MouseEvent<HTMLButtonElement>) => void;
  stockData: {
    [key: string]: string;
  };
  isLoading: boolean;
};

const AppContext = createContext<AppContextType>({
  handleSearch: () => {},
  stockData: {},
  isLoading: false
});

export default AppContext;

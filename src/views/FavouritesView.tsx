import { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import Favourites from '../components/FavouritesView/Favourites';

function FavouritesView() {
  const { resetContext } = useContext(AppContext);

  useEffect(() => {
    resetContext();
  }, []);

  return (
    <div className="mx-10 flex-1 xl:mx-40 2xl:mx-80">
      <Favourites />
    </div>
  );
}

export default FavouritesView;

import { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import DetailsList from '../components/DetailsView/DetailsList';
import NewSearchButton from '../components/NewSearchButton';

function DetailsView() {
  const { resetContext } = useContext(AppContext);

  useEffect(() => {
    resetContext();
  }, []);

  return (
    <div className="mx-10 flex-1">
      <NewSearchButton />
      <DetailsList />
    </div>
  );
}

export default DetailsView;

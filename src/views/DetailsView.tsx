import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import DetailsList from '../components/DetailsView/DetailsList';

function DetailsView() {
  const { resetContext } = useContext(AppContext);

  useEffect(() => {
    resetContext();
  }, []);

  return (
    <div className="flex-1">
      <DetailsList />
      <div className="flex justify-center">
        <Link to="/">
          <div className="my-3 h-10 w-28 rounded bg-stone-500 px-2 py-2 text-center text-white">
            New Search
          </div>
        </Link>
      </div>
    </div>
  );
}

export default DetailsView;

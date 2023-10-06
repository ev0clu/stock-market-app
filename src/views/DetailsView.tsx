import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

function DetailsView() {
  const { resetContext, stockCompanyData } = useContext(AppContext);

  useEffect(() => {
    resetContext();
  }, []);

  return (
    <>
      <div>DetailsView</div>
      <pre>{JSON.stringify(stockCompanyData, null, 2)}</pre>
      <Link to="/">
        <div className="h-10 w-28 rounded bg-stone-500 px-2 py-2 text-white">
          New Search
        </div>
      </Link>
    </>
  );
}

export default DetailsView;

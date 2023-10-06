import { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';

function DetailsView() {
  const { resetContext } = useContext(AppContext);

  useEffect(() => {
    resetContext();
  }, []);

  return (
    <>
      <div>DetailsView</div>
    </>
  );
}

export default DetailsView;

import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import MetaData from './MetaData';
import TimeSeries from './TimeSeries';

function DetailsList() {
  const { stockCompanyData, isLoading } = useContext(AppContext);

  return (
    <>
      {isLoading ||
      stockCompanyData['Meta Data']['1. Information'] === '' ? (
        <div className="flex flex-col items-center">
          <div>Loading ...</div>
        </div>
      ) : (
        <div className="flex flex-col items-stretch">
          {'Error Message' in stockCompanyData ? (
            <p className="mx-auto my-5 text-red-600">
              Stock informations have not found
            </p>
          ) : (
            <div>
              <MetaData />
              <TimeSeries />
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default DetailsList;

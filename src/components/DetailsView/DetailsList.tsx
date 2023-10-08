import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import MetaData from './MetaData';
import TimeSeries from './TimeSeries';
import Chart from './Chart';

function DetailsList() {
  const { stockCompanyData, isLoading, stockError } =
    useContext(AppContext);

  return (
    <>
      {isLoading ? (
        <div className="flex flex-col items-center">
          <div>Loading ...</div>
        </div>
      ) : (
        <div className="flex flex-col items-stretch">
          {stockError ? (
            <p className="mx-auto my-5 text-red-600">
              Stock informations have not found or API limit/minute
              has reached
            </p>
          ) : stockCompanyData['Meta Data']['1. Information'] ===
            '' ? (
            <div className="flex flex-col items-center">
              <div>Loading ...</div>
            </div>
          ) : (
            <div>
              <div className="flex flex-col justify-between gap-5 lg:flex-row">
                <MetaData />
                <Chart />
              </div>
              <TimeSeries />
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default DetailsList;

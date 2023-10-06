import { useContext } from 'react';
import AppContext from '../../context/AppContext';

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
            <>
              <h1 className="mx-10 my-5 flex flex-row gap-3 text-xl font-bold">
                {stockCompanyData['Meta Data']['1. Information']} (
                {stockCompanyData['Meta Data']['2. Symbol']})
              </h1>
              <div className="mx-10 flex flex-col">
                {Object.entries(stockCompanyData['Meta Data']).map(
                  ([key, value], index) =>
                    index > 1 && (
                      <div
                        className="flex flex-row justify-between gap-2 border-b-2"
                        key={index}
                      >
                        <p>{key.slice(3, key.length)}</p>
                        <p>{value}</p>
                      </div>
                    )
                )}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default DetailsList;

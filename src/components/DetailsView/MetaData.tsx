import { useContext } from 'react';
import AppContext from '../../context/AppContext';

function MetaData() {
  const { stockCompanyData } = useContext(AppContext);

  return (
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
  );
}

export default MetaData;

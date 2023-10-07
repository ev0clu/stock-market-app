import { useContext } from 'react';
import AppContext from '../../context/AppContext';

function MetaData() {
  const { stockCompanyData } = useContext(AppContext);

  const renderedData = Object.entries(
    stockCompanyData['Meta Data']
  ).map(
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
  );

  return (
    <>
      <h1 className="mb-2 mt-5 flex flex-row gap-3 text-xl font-bold">
        {stockCompanyData['Meta Data']['1. Information']} (
        {stockCompanyData['Meta Data']['2. Symbol']})
      </h1>
      <div className="flex flex-col">{renderedData}</div>
    </>
  );
}

export default MetaData;

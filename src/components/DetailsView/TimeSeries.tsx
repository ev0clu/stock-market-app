import { useContext } from 'react';
import AppContext from '../../context/AppContext';

function TimeSeries() {
  const { stockCompanyData } = useContext(AppContext);

  const renderedData = Object.entries(
    stockCompanyData['Time Series (Daily)']
  ).map(([date, entry]) => (
    <div className="border-2 p-2" key={date}>
      <p>
        <b>{date}</b>
      </p>
      <p>Open: {entry['1. open']}</p>
      <p>High: {entry['2. high']}</p>
      <p>Low: {entry['3. low']}</p>
      <p>Close: {entry['4. close']}</p>
      <p>Volume: {entry['5. volume']}</p>
    </div>
  ));

  return (
    <>
      <h1 className="mb-2 mt-5 flex flex-row gap-3 text-xl font-bold">
        Time Series (Daily)
      </h1>
      <div className="min-w-350 grid grid-cols-2 gap-4 md:grid-cols-5">
        {renderedData}
      </div>
    </>
  );
}

export default TimeSeries;

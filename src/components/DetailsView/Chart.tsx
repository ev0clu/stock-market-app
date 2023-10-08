import { useContext, useEffect, useState, useRef } from 'react';
import AppContext from '../../context/AppContext';
import Highcharts from 'highcharts/highstock';
import HighchartsReact, {
  HighchartsReactRefObject
} from 'highcharts-react-official';
import HCStock from 'highcharts/modules/stock';
import AccessibilityModule from 'highcharts/modules/accessibility';

AccessibilityModule(Highcharts);
HCStock(Highcharts); // Initialize the stock module
Highcharts.setOptions({});

function Chart() {
  const { stockCompanyData, isLoading } = useContext(AppContext);
  const [series, setSeries] = useState<number[][]>([]);
  const [options, setOptions] = useState({});
  const [loadChart, setLoadChart] = useState(false);
  const chartComponentRef = useRef<HighchartsReactRefObject>(null);

  useEffect(() => {
    if (!isLoading) {
      const newSeries = Object.entries(
        stockCompanyData['Time Series (Daily)']
      ).map(([date, entry]) => {
        const newDate = new Date(date);

        const timestamp = newDate.getTime();

        return [
          timestamp,
          Number(entry['1. open']),
          Number(entry['2. high']),
          Number(entry['3. low']),
          Number(entry['4. close'])
        ];
      });

      newSeries.reverse();
      setSeries(newSeries);
    }
  }, [isLoading, stockCompanyData]);

  useEffect(() => {
    setOptions({
      title: {
        text: `${stockCompanyData['Meta Data']['2. Symbol']} Stock Daily Price`
      },
      chart: {
        type: 'candlestick',
        height: '400'
      },
      series: [
        {
          type: 'candlestick',
          name: `${stockCompanyData['Meta Data']['2. Symbol']} Stock Daily Price`,
          data: series
        }
      ]
    });
  }, [series]);

  useEffect(() => {
    setLoadChart(true);
  }, [options]);

  return (
    <>
      {loadChart ? (
        <div>
          <HighchartsReact
            highcharts={Highcharts}
            constructorType={'stockChart'}
            options={options}
            ref={chartComponentRef}
          />
        </div>
      ) : (
        <div>Loading ...</div>
      )}
    </>
  );
}

export default Chart;

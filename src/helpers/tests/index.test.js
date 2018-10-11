import { arrangeChartData, getChartOptions } from '..';
import testData from '../../data/testData';

describe('Helpers', () => {
  it('arrangechartData', async () => {
    const marketData = arrangeChartData(testData.ticker.markets);
    const emptyMarketData = arrangeChartData([]);

    expect(emptyMarketData.chartData.length).toBe(0);
    expect(marketData.chartData.length).toBeGreaterThan(1);
    expect(marketData.legends.length).toBeGreaterThan(1);
  });



  it('getChartOptions', async () => {
    expect(getChartOptions(testData.ticker.markets)).toBeDefined();
  });
});

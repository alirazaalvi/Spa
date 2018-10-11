export function arrangeChartData(markets) {
  if (!markets) {
    return { chartData: [], legends: [] };
  }

  const chartData = [];
  const legends = [];

  if (markets && markets.length > 0) {
    for (let i = 0; i < markets.length; i++) { // eslint-disable-line no-plusplus
      chartData.push({ name: markets[i].market, value: markets[i].price });
      legends.push(markets[i].market);
    }
  }

  return { chartData, legends };
}

export function getChartOptions(marketData) {
  const { chartData, legends } = marketData;
  return {
    tooltip: {
      trigger: 'item',
      formatter: 'Price : {c}',
    },
    legend: {
      orient: 'horizontal',
      bottom: 'bottom',
      data: legends,
    },
    series: [
      {
        name: '',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: chartData,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };
}

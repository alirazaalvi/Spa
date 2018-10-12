import React from 'react';
import ReactEcharts from 'echarts-for-react';
import PropTypes from 'prop-types';
import { arrangeChartData, getChartOptions } from '../../helpers';

const Ticker = (props) => {
  const { markets } = props;
  const marketData = arrangeChartData(markets);

  const hasData = markets && markets.length > 0;

  return (
    <div className="chart">
      {hasData && (
      <ReactEcharts
        option={getChartOptions(marketData)}
        style={{ height: 500 }}
      />)}
    </div>
  );
};

Ticker.propTypes = {
  markets: PropTypes.arrayOf(PropTypes.shape({})),
};

Ticker.defaultProps = {
  markets: [],
};

export default Ticker;

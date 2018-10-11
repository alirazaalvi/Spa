import React, { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';
import PropTypes from 'prop-types';
import { arrangeChartData, getChartOptions } from '../../helpers';

class Ticker extends PureComponent {
  render() {
    const { markets } = this.props;
    const marketData = arrangeChartData(markets);
    const onEvents = {
      click: this.onChartClick,
      legendselectchanged: this.onChartLegendselectchanged,
    };

    const hasData = markets && markets.length > 0;

    return (
      <div className="chart">
        {hasData && (
        <ReactEcharts
          option={getChartOptions(marketData)}
          style={{ height: 500 }}
          onChartReady={this.onChartReady}
          onEvents={onEvents}
        />)}
      </div>
    );
  }
}

Ticker.propTypes = {
  markets: PropTypes.arrayOf(PropTypes.shape({})),
};

Ticker.defaultProps = {
  markets: [],
};

export default Ticker;

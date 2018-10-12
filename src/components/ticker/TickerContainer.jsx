import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Ticker from './Ticker';
import Message from '../common/Message';
import { fetchTicker } from '../../actions';

export class TickerContainer extends Component {
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    this.doApiCall = this.doApiCall.bind(this);
  }

  componentDidMount() {
    this.doApiCall();
  }

  // Dispatch an action to fetch ticker
  doApiCall() {
    this.dispatch(fetchTicker());

    return true;
  }

  render() {
    const { markets, refreshing, errorMessage } = this.props;
    return (
      <div>
        <div className="page-header">
          <h1>Market Data</h1>
          <input
            className="button-primary"
            type="button"
            value={refreshing ? 'Loading' : 'Refresh'}
            onClick={this.doApiCall}
          />
          <Message message={errorMessage} />
        </div>
        <Ticker markets={markets} />
      </div>);
  }
}

TickerContainer.propTypes = {
  markets: PropTypes.arrayOf(PropTypes.shape({})),
  refreshing: PropTypes.bool,
  dispatch: PropTypes.func,
  errorMessage: PropTypes.string,
};

TickerContainer.defaultProps = {
  markets: [],
  refreshing: false,
  errorMessage: '',
  dispatch: () => {},
};

function mapStateToProps(state) {
  const { markets, refreshing, errorMessage } = state.MainReducer;
  return {
    markets: markets.toJSON(),
    refreshing,
    errorMessage,
  };
}

export default connect(mapStateToProps)(TickerContainer);

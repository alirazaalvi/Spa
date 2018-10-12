import Space from 'spaceace';
import Constants from '../constants';

export const data = new Space({ markets: [], refreshing: false });

export default (state = data, action) => {
  const type = action && action.type ? action.type : '';
  switch (type) {
    case Constants.FETCHED_TICKER:
    {
      return data({ markets: action.data.ticker.markets });
    }
    case Constants.REFRESHING:
    {
      return data({ refreshing: action.data });
    }
    default:
    {
      return state;
    }
  }
};

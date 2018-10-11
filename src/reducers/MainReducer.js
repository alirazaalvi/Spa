import Space from 'spaceace';
import Constants from '../constants';

export const data = new Space({ markets: [] });

export default (state = data, action) => {
  const type = action && action.type ? action.type : '';
  switch (type) {
    case Constants.FETCHED_TICKER:
    {
      return data({ markets: action.data.ticker.markets });
    }
    default:
    {
      return state;
    }
  }
};

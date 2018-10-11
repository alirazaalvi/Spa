
import axios from 'axios';
import Constants from '../constants';

// Thunk action to fetch the list of hotels
export function fetchTicker() {
  return (dispatch) => {
    axios.get('https://api.cryptonator.com/api/full/btc-usd')
      .then((response) => {
        dispatch({
          type: Constants.FETCHED_TICKER,
          data: response.data,
        });
      })
      .catch((error) => {
        // Placeholder action for error handling
        dispatch({
          type: Constants.ERROR_MESSAGE,
          data: error,
        });
      });
  };
}

export default fetchTicker;

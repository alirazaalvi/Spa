
import axios from 'axios';
import Constants from '../constants';


export function toggleRefresh(refreshStatus) {
  return {
    type: Constants.REFRESHING,
    data: refreshStatus,
  };
}

export function toggleErrorMessage(errorMessage) {
  return {
    type: Constants.ERROR_MESSAGE,
    data: errorMessage,
  };
}


// Thunk action to fetch the list of hotels
export function fetchTicker() {
  return (dispatch) => {
    dispatch(toggleRefresh(true));

    axios.get('https://api.cryptonator.com/api/full/btc-usd')
      .then((response) => {
        dispatch(toggleRefresh(false));

        dispatch({
          type: Constants.FETCHED_TICKER,
          data: response.data,
        });

        dispatch(toggleErrorMessage(''));
      })
      .catch(() => {
        dispatch(toggleRefresh(false));
        dispatch(toggleErrorMessage('Oops! Something went wrong!. Please try again.'));
      });
  };
}

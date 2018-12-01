import produce from 'immer';
import Constants from '../constants';

export const defaultState = { markets: [], refreshing: false, errorMessage: '' };
const reducer = (
  state = defaultState,
  action,
) => produce(state, (draft) => {
  let currentDraft = draft;
  const actionType = action && action.type ? action.type : '';
  switch (actionType) {
    case Constants.FETCHED_TICKER: {
      currentDraft.markets = action.data.ticker.markets;
      return;
    }
    case Constants.REFRESHING:
    {
      currentDraft.refreshing = action.data;
      return;
    }
    case Constants.ERROR_MESSAGE:
    {
      currentDraft.errorMessage = action.data;
      return;
    }
    default: {
      currentDraft = draft;
    }
  }
});

export default reducer;

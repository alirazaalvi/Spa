import produce from 'immer';
import reducer, { defaultState } from '../MainReducer';
import Constants from '../../constants';
import testData from '../../data/testData';

describe('reducers', () => {
  it('should return initial state of ticker', () => {
    expect(reducer()).toEqual(produce(defaultState, () => {}));
  });

  it('should fetch market data', () => {
    const nextState = reducer(defaultState, {
      type: Constants.FETCHED_TICKER,
      data: testData,
    });

    expect(nextState.markets.length).toBeGreaterThan(1);
  });

  it('should set the error message', () => {
    const nextState = reducer(defaultState, {
      type: Constants.ERROR_MESSAGE,
      data: 'ERROR',
    });

    expect(nextState.errorMessage).toEqual('ERROR');
  });
});

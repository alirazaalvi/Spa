import reducer, { data } from '../MainReducer';
import Constants from '../../constants';
import testData from '../../data/testData';

describe('reducers', () => {
  it('should return initial state of ticker', () => {
    expect(reducer()).toEqual(data);
  });

  it('should fetch market data', () => {
    const nextState = reducer(data, {
      type: Constants.FETCHED_TICKER,
      data: testData,
    });

    expect(nextState.markets.length).toBeGreaterThan(1);
  });

  it('should set the error message', () => {
    const nextState = reducer(data, {
      type: Constants.ERROR_MESSAGE,
      data: 'ERROR',
    });

    expect(nextState.errorMessage).toEqual('ERROR');
  });
});

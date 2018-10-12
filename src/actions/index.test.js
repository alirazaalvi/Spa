// test/utils/mockStore.js
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { fetchTicker, toggleRefresh } from '.';
import Constants from '../constants';

// test/utils/getAction.js
function findAction(store, type) {
  return store.getActions().find(action => action.type === type);
}

function getAction(store, type) {
  const action = findAction(store, type);
  if (action) return Promise.resolve({ type: action.type });

  return new Promise(resolve => (
    store.subscribe(() => {
      const newAction = findAction(store, type);
      if (newAction) resolve({ type: newAction.type });
    })
  ));
}

const mockStore = configureMockStore([thunk]);
describe('Ticker', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('fetch all', async (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {},
      });
    });

    const store = mockStore();
    await store.dispatch(fetchTicker());
    const executedAction = await getAction(store, Constants.FETCHED_TICKER);
    expect(executedAction)
      .toEqual({ type: Constants.FETCHED_TICKER });
    done();
  });

  it('fail to fetch', async (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: {},
      });
    });

    const store = mockStore();
    await store.dispatch(fetchTicker());
    const executedErrorAction = await getAction(store, Constants.ERROR_MESSAGE);
    const executedToggleRereshAction = await getAction(store, Constants.REFRESHING);
    expect(executedErrorAction)
      .toEqual({ type: Constants.ERROR_MESSAGE });

    expect(executedToggleRereshAction)
      .toEqual({ type: Constants.REFRESHING });

    done();
  });

  it('should create an action to refresh', () => {
    const expectedAction = {
      type: Constants.REFRESHING,
      data: true,
    };
    expect(toggleRefresh(true)).toEqual(expectedAction)
  });
});

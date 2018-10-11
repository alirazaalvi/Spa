// test/utils/mockStore.js
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { fetchTicker } from '.';
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
});

import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from '../App';
import MainReducer from '../../reducers/MainReducer';

enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore([thunk]);
const storeStateMock = {
  MainReducer,
};

let store;
let component;
describe('tests for App', () => {
  it('renders container', () => {
    store = mockStore(storeStateMock);
    component = shallow(<App store={store} />);

    expect(component.find('.container').length).toBe(1);
  });
});

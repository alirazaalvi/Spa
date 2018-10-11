import React from 'react';
import enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import ConnectedTickerContainer, { TickerContainer } from '../TickerContainer';
import setupStore from '../../../helpers/testUtils';

enzyme.configure({ adapter: new Adapter() });

describe('Ticker', () => {
  const store = setupStore();
  const connectedComponent = mount(<Provider store={store}><ConnectedTickerContainer /></Provider>);
  const component = shallow(<TickerContainer />);

  it('render container', () => {
    expect(connectedComponent.find('.page_header').length).toBe(1);
  });

  it('executed api call', () => {
    expect(component.instance().doApiCall()).toBe(true);
  });
});

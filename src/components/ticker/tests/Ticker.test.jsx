import React from 'react';
import enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Ticker from '../Ticker';
import testData from '../../../data/testData';

enzyme.configure({ adapter: new Adapter() });

describe('Hotel', () => {
  it('render list item', () => {
    const componentBody = (<Ticker values={testData.markets} />);
    const component = mount(componentBody);
    expect(component.find('.chart').length).toBe(1);
  });
});

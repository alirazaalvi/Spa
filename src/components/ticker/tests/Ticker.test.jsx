import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Ticker from '../Ticker';
import testData from '../../../data/testData';

enzyme.configure({ adapter: new Adapter() });

describe('Ticker', () => {
  it('renders chart', () => {
    const componentBody = (<Ticker values={testData.markets} />);
    const component = shallow(componentBody);
    expect(component.find('.chart').length).toBe(1);
  });
});

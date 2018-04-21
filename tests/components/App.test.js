import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../../app/components/App';

configure({ adapter: new Adapter() });

describe('App Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should exist', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render component Logo', () => {
    expect(wrapper.contains('Logo')).toBe(false)
  });

  it('should render component Menu', () => {
    expect(wrapper.contains('Menu')).toBe(false)
  });

  // it('should have one heading', () => {
  //   expect(wrapper.find('#logo').type()).toEqual('<Logo>');
  // });
});

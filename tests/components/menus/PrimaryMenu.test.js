import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PrimaryMenu from '../../../app/components/menus/PrimaryMenu';

configure({ adapter: new Adapter() });

describe('PrimaryMenu Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PrimaryMenu />);
  });

  // it('should exist', () => {
  //   expect(wrapper).toBeTruthy();
  // });
});

import React from 'react';
import {shallow} from 'enzyme';
import {SideBarItem} from '../SideBarItem';

const location = {
  pathname: '/praveenorugantitech-youtube-clone-reactjs/feed/trending',
};

describe('SideBarItem', () => {
  test('Renders SideBarItem without path', () => {
    const wrapper = shallow(
      <SideBarItem location={location} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('Renders highlighted SideBarItem', () => {
    const wrapper = shallow(
      <SideBarItem highlighted icon='fire' label='Trending' location={location} path={'/praveenorugantitech-youtube-clone-reactjs/feed/trending'}/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('Render non-highlighted SideBarItem', () => {
    const wrapper = shallow(
      <SideBarItem icon='fire' label='Trending' location={location}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

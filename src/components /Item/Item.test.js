import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Item from './Item'

describe(`Item component`, () => {
  const props = {
    id: 'a',
    name: 'test-class-name',
  }

  it('renders a .Item by default', () => {
    const wrapper = shallow(<Item />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the Item given props', () => {
    const wrapper = shallow(<Item {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

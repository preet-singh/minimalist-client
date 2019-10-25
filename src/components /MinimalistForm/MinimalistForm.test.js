import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import MinimalistForm from './MinimalistForm'

describe(`MinimalistForm component`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  }

  it('renders a form.MinimalistForm by default', () => {
    const wrapper = shallow(<MinimalistForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the MinimalistForm given props', () => {
    const wrapper = shallow(<MinimalistForm {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

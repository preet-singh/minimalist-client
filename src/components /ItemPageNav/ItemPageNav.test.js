import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ItemPageNav from './ItemPageNav'

describe(`ItemPageNav component`, () => {
  it('renders a .ItemPageNav by default', () => {
    const wrapper = shallow(<ItemPageNav />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders a h3 with inventory name when in props', () => {
    const props = {
      match: {
        params: {
          ItemId: 'test-item-id'
        }
      }
    }
    const context = {
      Items: [{ id: 'test-item-id', folderId: 'test-inventory-id' }],
      inventory: [{ id: 'test-inventory-id', name: 'Important' }]
    }

    const h3 = shallow(<ItemPageNav {...props} />, context)
      .find('.ItemPageNav__inventory-name')
    expect(toJson(h3)).toMatchSnapshot()
  })
})

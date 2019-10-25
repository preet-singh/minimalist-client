import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ItemPageMain from './ItemPageMain'

describe(`ItemPageMain component`, () => {
  it('renders a .ItemPageMain by default', () => {
    const wrapper = shallow(<ItemPageMain />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders a Item with item prop', () => {
    const props = {
      match: {
        params: {
          itemId: 'cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1'
        }
      }
    }
    const context = {
      items: [{
        id: `cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1`,
        name: `Dogs`,
        // inventoryId: b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1,
        description: "Corporis accusamus placeat.\n \rUnde."
      }]
    }
    const item = shallow(<ItemPageMain {...props} />, context)
      .find('Item')
    expect(toJson(item)).toMatchSnapshot()
  })

  it(`splits the description by \\n or \\n\\r, with a p foreach`, () => {
    const props = {
      match: {
        params: {
          itemId: 'cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1'
        }
      }
    }

    const itemsContextWithDifferentDescription = [
      {
        items: [
          {
            id: `cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1`,
            description: "description with n r.\n \rafter n r.",
          }
        ]
      },
      {
        items: [
          {
            id: `cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1`,
            description: "description with n.\nafter."
          }
        ]
      }
    ]

    itemsContextWithDifferentDescription.forEach(context => {
      const description = shallow(<ItemPageMain {...props} />, context)
        .find('ItemPageMain__description')
      expect(toJson(description)).toMatchSnapshot()
    })
  })
})

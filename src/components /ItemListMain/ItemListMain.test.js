import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ItemListMain from './ItemListMain'

describe(`ItemListMain component`, () => {
  it('renders a .ItemListMain by default', () => {
    const wrapper = shallow(<ItemListMain />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders a Item in ul for each items in array', () => {
    const props = {
      match: {
        params: {
          inventoryId: 'THIS_INVEN_ID'
        }
      }
    }
    const context = {
      items: [
        {
          "id": "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
          "name": "Kitchen",
          "inventoryId": "THIS_INVEN_ID",
          "description": "Corporis accusamus placeat.\n \rUnde."
        },
        {
          "id": "d26e0034-ffaf-11e8-8eb2-f2801f1b9fd1",
          "name": "Clothing",
          "inventoryId": "THIS_INVEN_ID",
          "description": "Eos\n \rlaudantium."
        },
        {
          "id": "d26e01a6-ffaf-11e8-8eb2-f2801f1b9fd1",
          "name": "Bedding",
          "inventoryId": "THIS_INVEN_ID",
          "description": "Occaecati dignissimos\nvoluptatum nihil."
        },
        {
          "id": "d26e0570-ffaf-11e8-8eb2-f2801f1b9fd1",
          "name": "Birds",
          "inventoryId": "THIS_INVEN_ID",
          "description": "Eum culpa odit."
        },
      ]
    }
    const ul = shallow(<ItemListMain {...props} />, context)
      .find('ul')
    expect(toJson(ul)).toMatchSnapshot()
  })
})

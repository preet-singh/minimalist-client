import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ItemListNav from './ItemListNav'

describe(`NoteListNav component`, () => {
  it('renders a .ItemListNav by default', () => {
    const wrapper = shallow(<ItemListNav />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  // enzyme doesn't yet support React.createContext
  it('renders a link in ul for each inventory in array', () => {
    const context = {
      items: [
        {
          "id": "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
          "name": "Dogs",
          "inventoryId": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
          "description": "Corporis accusamus placeat.\n \rUnde."
        },
        {
          "id": "d26e0034-ffaf-11e8-8eb2-f2801f1b9fd1",
          "name": "Cats",
          "inventoryId": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
          "description": "Eos\n \rlaudantium."
        },
        {
          "id": "d26e01a6-ffaf-11e8-8eb2-f2801f1b9fd1",
          "name": "Pigs",
          "inventoryId": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
          "description": "Occaecati dignissimos\nvoluptatum nihil."
        },
        {
          "id": "d26e0570-ffaf-11e8-8eb2-f2801f1b9fd1",
          "name": "Birds",
          "inventoryId": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
          "description": "Eum culpa odit."
        },
      ],
      inventory: [
        {
          "id": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
          "name": "Clothes"
        },
        {
          "id": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
          "name": "Bedding"
        },
        {
          "id": "b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1",
          "name": "Kitchen"
        }
      ]
    }
    const ul = shallow(<ItemListNav />, context)
      .find('ul')
    expect(toJson(ul)).toMatchSnapshot()
  })
})

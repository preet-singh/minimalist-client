import React, { Component } from 'react'
import InventoryListContext from '../InventoryListContext'
import InventoryApiService from '../services/inventory-api-service'
import { Section } from '../utils/utils'
import ItemListNav from '../components /ItemListNav/ItemListNav';
//import ArticleListItem from '../../components/ArticleListItem/ArticleListItem'

export default class InventoryListPage extends Component {
  static contextType = InventoryListContext

  componentDidMount() {
    this.context.clearError()
    InventoryApiService.getInvetory()
      .then(this.context.setInventoryList)
      .catch(this.context.setError)
  }

  renderInventory() {
    const { inventoryList = [] } = this.context
    return inventoryList.map(inventory =>
      <ItemListNav
        key={inventory.id}
        inventory={inventory}
      />
    )
  }

  render() {
    const { error } = this.context
    return (
      <Section list className='InventoryListPage'>
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderInventory()}
      </Section>
    )
  }
}
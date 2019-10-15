import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Item from '../Item/Item'
import Button from '../Button/Button'
import InventoryContext from '../../InventoryContext'
import { getItemsForInventory } from '../item-helpers'
import './ItemListMain.css'
import PropTypes from 'prop-types';

export default class ItemListMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = InventoryContext;

  render() {
    const { inventoryId } = this.props.match.params
    const { items=[] } = this.context
    const itemsForInventory = getItemsForInventory(items, inventoryId)
    return (
      <section className='ItemListMain'>
        <ul>
          {itemsForInventory.map(item =>
            <li key={Number(item.id)}>
              <Item
                id={item.id}
                name={item.item_name}
                modified={Date(item.date_modified).toString()}
              />
            </li>
          )}
        </ul>
        <div className='ItemListMain_button-container'>
          <Button
            tag={Link}
            to='/add-item'
            type='button'
            className='ItemListMain_add-item-button'
          >
            <FontAwesomeIcon icon='plus' />
            <br />
            Item
          </Button>
        </div>
      </section>
    )
  }
}

ItemListMain.propTypes = {
  match: PropTypes.object.isRequired
}

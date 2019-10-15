import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';
import InventoryContext from '../../InventoryContext';
import { countItemsForInventory } from '../item-helpers';
import './ItemListNav.css';

export default class ItemListNav extends React.Component {
  static contextType = InventoryContext;

  render() {
    const { inventories=[], items=[] } = this.context
    return (
      <div className='ItemListNav'>
        <ul className='ItemListNav_list'>
          {inventories.map(inventory =>
            <li key={Number(inventory.id)}>
              <NavLink
                className='ItemListNav_inventory-link'
                to={`/inventory/${inventory.id}`}
              >
                <span className='ItemListNav_num-items'>
                  {countItemsForInventory(items, inventory.id)}
                </span>
                {inventory.inventory_name}
              </NavLink>
            </li>
          )}
        </ul>
        <div className='ItemListNav_button-wrapper'>
          <Button
            tag={Link}
            to='/add-inventory'
            type='button'
            className='ItemListNav_add-inventory-button'
          >
            <FontAwesomeIcon icon='plus' />
            <br />
            Inventory
          </Button>
        </div>
      </div>
    )
  }
}

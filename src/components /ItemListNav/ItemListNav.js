import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';
import InventoryContext from '../../InventoryContext';
import { countItemsForInventory } from '../item-helpers';
import config from '../../config';
import PropTypes from 'prop-types';
import './ItemListNav.css';

export default class ItemListNav extends React.Component {
  static defaultProps = {
    onDeleteInventory: () => {},
    match: {
      params: {}
    }
  }
  static contextType = InventoryContext;

  handleDeleteInventory = (e) => {
    e.preventDefault();
    const inventoryId = Number(this.props.match.params.inventoryId)
    console.log(inventoryId);

    fetch(`${config.API_ENDPOINT}/inventory/${inventoryId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      },
    })
      .then(res => {
        if (!res.ok) return res.json().then(e => Promise.reject(e));
        else return undefined;
      })
      .then(() => {
        this.context.deleteInventory(inventoryId)
        this.props.onDeleteInventory(inventoryId)
        this.props.history.push('/');
      })
      .catch(error => {
        console.error({ error });
      });
  };
  render() {
    const { inventory=[], items=[] } = this.context
    console.log(inventory);
    return (
      <div className='ItemListNav'>
        <ul className='ItemListNav_list'>
          {inventory.map(inventory =>
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

          <Button
            tag={Link}
            to={`/inventory`}
            type='button'
            className='ItemListNav_del-inventory-button'
            onClick={this.handleDeleteInventory}
          >
            <FontAwesomeIcon icon='minus' /> 
            <br />
            Inventory
          </Button>
        </div>
        {/* <div className='ItemListNav_button-wrapper-del' key={Number(inventory.id)} >
          <Button
            tag={Link}
            to={`/inventory`}
            type='button'
            className='ItemListNav_del-inventory-button'
            onClick={this.handleDeleteInventory}
          >
            <FontAwesomeIcon icon='minus' /> 
            <br />
            Inventory
          </Button>
        </div> */}
      </div>
    )
  }
}

ItemListNav.propTypes = {
  onDeleteInventory: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

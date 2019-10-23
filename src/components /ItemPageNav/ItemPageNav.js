import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../Button/Button'
import InventoryContext from '../../InventoryContext'
import { findItem, findInventory } from '../item-helpers'
import PropTypes from 'prop-types';
import './ItemPageNav.css'


export default class ItemPageNav extends React.Component {
  static defaultProps = {
    history: {
      goBack: () => { }
    },
    match: {
      params: {}
    }
  }
  static contextType = InventoryContext;

  render() {
    const { items, inventory, } = this.context
    const { itemId } = this.props.match.params
    const item = findItem(items, itemId) || {}
    const inven = findInventory(inventory, item.inventory_id)
    return (
      <div className='ItemPageNav'>
        <Button
          tag='button'
          role='link'
          onClick={() => this.props.history.goBack()}
          className='ItemPageNav__back-button'
        >
          <FontAwesomeIcon icon='chevron-left' />
          <br />
          Back
        </Button>
        {inventory && (
          <h3 className='ItemPageNav__inventory-name'>
            {inventory.inventory_name}
          </h3>
        )}
      </div>
    )
  }
}

ItemPageNav.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}
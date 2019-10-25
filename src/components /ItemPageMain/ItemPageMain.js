import React from 'react';
import Item from '../Item/Item';
import InventoryContext from '../../InventoryContext';
import { findItem } from '../item-helpers';
import PropTypes from 'prop-types';
import './ItemPageName.css';

export default class ItemPageMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  };
  static contextType = InventoryContext;

  handleDeleteItem = itemId => {
    this.props.history.push(`/`)
  };

  render() {
    const { items=[] } = this.context
    const { itemId } = this.props.match.params
    const item = findItem(items, Number(itemId)) || { item_description: 'test desc', item_action: 'test action'}
    console.log(item);
    return (
      <section className='ItemPageMain'>
        <Item
          id={item.id}
          name={item.item_name}
          onDeleteItem={this.handleDeleteItem}
        />
        <div className='ItemPageMain_description'>
          {item.item_description.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>Description: {para}</p>
          )}
        </div>
        <div className='ItemPageMain_action'>
          {item.item_action.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>Action: {para}</p>
          )}
        </div>
      </section>
    )
  }
}

ItemPageMain.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

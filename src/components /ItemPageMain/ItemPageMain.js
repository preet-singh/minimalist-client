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
    const item = findItem(items, itemId) || { item_description: '' }
    return (
      <section className='ItemPageMain'>
        <Item
          id={item.id}
          name={item.item_name}
          modified={Date(item.date_modified).toString()}
          onDeleteItem={this.handleDeleteItem}
        />
        <div className='ItemPageMain_description'>
          {item.item_description.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>{para}</p>
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

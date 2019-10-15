import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InventoryContext from '../../InventoryContext'
import config from '../../config'
import './Item.css'
import PropTypes from 'prop-types';

export default class Item extends React.Component {
  static defaultProps ={
    onDeleteItem: () => {},
  }
  static contextType = InventoryContext;

  handleClickDelete = e => {
    e.preventDefault()
    const itemId = this.props.id

    fetch(`${config.API_ENDPOINT}/items/${itemId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
      })
      .then(() => {
        this.context.deleteItem(itemId)
        // allow parent to perform extra behaviour
        this.props.onDeleteItem(itemId)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const { name, id, modified } = this.props
    return (
      <div className='Item'>
        <h2 className='Item_title'>
          <Link to={`/item/${id}`}>
            {name}
          </Link>
        </h2>
        <button
          className='Item_delete'
          type='button'
          onClick={this.handleClickDelete}
        >
          <FontAwesomeIcon icon='trash-alt' />
          {' '}
          remove
        </button>
        <div className='Item_dates'>
          <div className='Item_dates-modified'>
            Modified
            {' '}
            <span className='Date'>
              {format(modified, 'Do MMM YYYY')}
            </span>
          </div>
        </div>
      </div>
    )
  }
}

Item.propTypes = {
  onDeleteItem: PropTypes.func.isRequired
}
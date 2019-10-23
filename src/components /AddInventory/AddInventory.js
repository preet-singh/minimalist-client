import React, { Component } from "react";
import InventoryContext from '../../InventoryContext';
import config from "../../config";
import PropTypes from 'prop-types';

export default class AddInventory extends Component {
  state = {
    name: ''
  }

  static contextType = InventoryContext;

  handleAddInventory = (e) => {
    e.preventDefault();

    const newInventory = {
      inventory_name: this.state.name,
      //TODO: make actual logged in user
      user_id: 1
    };


    fetch(`${config.API_ENDPOINT}/inventory`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newInventory)
    })
      .then(res => {
        if (!res.ok) return res.json().then(e => Promise.reject(e));
        else return res.json();
      })
      .then( (data) => {
        //console.dir(data);
        this.context.addInventory(data);
        this.props.history.push('/');
      })
      .catch(error => {
        console.error({ error });
      });
  };

  getInventoryName = (e) => {
    this.setState({name: e.target.value});
  }

  validateInventoryName = () => {
    let inventoryName = this.state.name;

    if (!inventoryName) {
        return 'Inventory name is required'
    } else {
        return null
    }
}

  render() {
    return (
      <form className='addItemOrInventory' onSubmit={e => this.handleAddInventory(e)}>
        <div>
          <label htmlFor="inventoryName">New Inventory Name: </label>
          <input type="text" id="inventoryName" value={this.state.name} onChange={ this.getInventoryName } />
          {this.validateInventoryName && <p className='validationElement'>{this.validateInventoryName()}</p>}
          <button disabled={this.validateInventoryName()} type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

AddInventory.propTypes = {
  history: PropTypes.object.isRequired
}
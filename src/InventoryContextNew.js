import React, { Component } from 'react'


const InventoryContextNew = React.createContext({
  inventories: [],
  items: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  addInventory: () => {},
  deleteInventory: () => {},
  addItem: () => {},
  deleteItem: () => {},
  editItem: () => {},
})

export default InventoryContextNew

export class InventoryProvider extends Component {
    state = {
        inventory: [],
        items: [],
        error: null
      }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setInventory = inventory => {
    this.setState({ inventory })
  }

  setItem = item => {
    this.setState({ item })
  }


  handleDeleteItem = itemId => {
    this.setState({
      items: this.state.items.filter(item => item.id !== itemId)
    });
  }

  handleDeleteInventory = inventoryId => {
    this.setState({
      inventory: this.state.inventory.filter(inventory => inventory.id !== inventoryId)
    })
  }

  addNewItem = newItem => {
    this.setState({
    items: [
      ...this.state.items,
      newItem,
    ]});
  }

  editItem = editItem => {
    this.setState({
      items: this.state.items.map(i => 
        (i.id !== editItem.id) ? i : editItem
        )
    });
  }

  addNewInventory = newInventory => {
    this.setState({
      inventory: [
        ...this.state.inventory,
        newInventory
      ]
    });
  }
  render() {
    const value = {
      inventory: this.state.inventory,
      items: this.state.items,
      addInventory: this.addNewInventory,
      deleteInventory: this.handleDeleteInventory,
      deleteItem: this.handleDeleteItem,
      addItem: this.addNewItem,
      editItem: this.editItem,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
    }
    return (
      <InventoryContextNew.Provider value={value}>
        {this.props.children}
      </InventoryContextNew.Provider>
    )
  }
}
import React, { Component } from 'react'

const InventoryListContext = React.createContext({
  inventoryList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setInventoryList: () => {},
})
export default InventoryListContext

export class InventoryListProvider extends Component {
  state = {
    inventoryList: [],
    error: null,
  };

  setInventoryList = inventoryList => {
    this.setState({ inventoryList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      inventoryList: this.state.inventoryList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setInventoryList: this.setInventoryList,
    }
    return (
      <InventoryListContext.Provider value={value}>
        {this.props.children}
      </InventoryListContext.Provider>
    )
  }
}
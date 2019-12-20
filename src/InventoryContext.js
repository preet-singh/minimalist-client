import React from 'react'

export default React.createContext({
  inventories: [],
  items: [],
  landing: false,
  setLanding: () => {},
  addInventory: () => {},
  deleteInventory: () => {},
  addItem: () => {},
  deleteItem: () => {},
  updateItem: () => {},
  setLanding: () => {},
})

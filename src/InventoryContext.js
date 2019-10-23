import React from 'react'

export default React.createContext({
  inventories: [],
  items: [],
  addInventory: () => {},
  deleteInventory: () => {},
  addItem: () => {},
  deleteItem: () => {},
  editItem: () => {},
})

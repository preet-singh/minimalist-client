import React from 'react'

export default React.createContext({
  inventory: [],
  items: [],
  addInventory: () => {},
  deleteInventory: () => {},
  addItem: () => {},
  deleteItem: () => {},
  editItem: () => {},
})

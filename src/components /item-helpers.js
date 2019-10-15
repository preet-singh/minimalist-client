export const findInventory = (inventory=[], inventoryId) =>
  inventory.find(inventory => inventory.id === inventoryId)

export const findItem = (items=[], itemId) =>
  items.find(item => item.id === itemId)

export const getItemsForInventory = (items=[], inventoryId) => (
  (!inventoryId)
    ? items
    : items.filter(item => item.inventoryId === inventoryId)
)

export const countItemsForInventory = (items=[], inventoryId) =>
  items.filter(item => item.inventoryId === inventoryId).length
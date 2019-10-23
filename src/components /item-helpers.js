export const findInventory = (inventory=[], inventoryId) =>
  inventory.find(inventory => inventory.id === Number(inventoryId))

export const findItem = (items=[], itemId) =>
  items.find(item => item.id === Number(itemId))

export const getItemsForInventory = (items=[], inventoryId) => (
  (!inventoryId)
    ? items
    : items.filter(item => item.inventory_id === Number(inventoryId))
)

export const countItemsForInventory = (items=[], inventoryId) =>
  items.filter(item => item.inventory_id === inventoryId).length
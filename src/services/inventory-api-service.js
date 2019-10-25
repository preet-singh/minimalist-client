import TokenService from './token-service'
import config from '../config'

const InventoryApiService = {
  getInventory() {
    return fetch(`${config.API_ENDPOINT}/inventory`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getIventory(inventoryId) {
    return fetch(`${config.API_ENDPOINT}/inventory/${inventoryId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getInventoryItems(inventoryId) {
    return fetch(`${config.API_ENDPOINT}/inventory/${inventoryId}/items`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postItem(name, description, inventoryId, action) {
    return fetch(`${config.API_ENDPOINT}/items`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        item_name: name,
        item_description: description,
        invetory_id: inventoryId,
        item_action: action
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default InventoryApiService
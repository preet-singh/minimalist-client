// import React, { Component } from 'react';
// import config from '../../config';
// import InventoryContext from '../../InventoryContext';
// import AddItem from '../AddItem/AddItem';
// import PropTypes from 'prop-types';

// export default class EditItem extends Component {
//   static defaultProps = {
//     onUpdateItem: () => {},
//   }

//   state = {
//     error: null
//   }

//   static contextType = InventoryContext;

//   handleClickUpdate = (e) => {
//     e.preventDefault()
//     const updatedItem = {
//         item_name: this.state.name,
//         item_description: this.state.description,
//         inventory_id: this.state.inventoryId,
//         item_action: this.state.action,
//       };
//     const itemId = this.props.id

//     fetch(`${config.API_ENDPOINT}/items/${itemId}`, {
//       method: 'PATCH',
//       headers: {
//         'content-type': 'application/json'
//       },
//       body: JSON.stringify(updatedItem)
//     })
//       .then(res => {
//         if (!res.ok)
//           return res.json().then(e => Promise.reject(e))
//       })
//       .then((data) => {
//         this.context.updateItem(data)
//         this.props.onUpdateItem(data)
//       })
//       .catch(error => {
//         console.error({ error })
//       })
//   }

//   getItemName = (e) => {
//     this.setState({ name: e.target.value });
//   }

//   getItemDescription = (e) => {
//     this.setState({ description: e.target.value });
//   }

//   getItemInventoryId = (e) => {
//     this.setState({ inventoryId: e.target.value });
//   }

//   getItemAction = (e) => {
//       this.setState({ action: e.target.value });
//   }

//   validateItemName = () => {
//     let item = this.state.item;

//     if (!item) {
//       return 'Item name is required'
//     } else {
//       return null
//     }
//   }

//   validateDescription = () => {
//     let item = this.state.description;

//     if (!item) {
//       return 'Item description is required'
//     } else {
//       return null
//     }
//   }

//   validateInventory = () => {
//     let inventory = this.state.inventoryId;

//     if (!inventory) {
//       return 'Inventory id is required'
//     } else {
//       return null
//     }
//   }

//   validateAction = () => {
//       let item = this.state.action;
      
//       if(!item) {
//           return 'Item action is required'
//       } else {
//           return null 
//       }
//   }

//   render() {
//     const { inventory } = this.context;

//     return (
//       <form className='addItemOrInventory' onSubmit={e => this.handleAddItem(e)}>
//         <div>
//           <label htmlFor='itemName'>New Item Name: </label>
//           <input type='text' id='itemName' value={this.state.name} onChange={ this.getItemName } />
//           {this.validateItemName && <p className='validationElement'>{this.validateItemName()}</p>}
//         </div>
//         <div>
//           <label htmlFor="itemDescription">Description: </label>
//           <input type='text' id='itemDescription' value={this.state.description} onChange={ this.getItemDescription } />
//           {this.validateDescription && <p className='validationElement'>{this.validateDescription()}</p>}
//         </div>
//         <div>
//           <select name='Choose inventory...' value={this.state.inventoryId} onChange={ this.getItemInventoryId }>
//             <option key="default" value={null}>Select Inventory</option>
//             {inventory.map((inventory) => <option key={Number(inventory.id)} value={inventory.id}>{inventory.inventory_name}</option>)}
//           </select>
//           {this.validateInventory && <p className='validationElement'>{this.validateInventory()}</p>}
//         </div>
//         <div>
//           <label htmlFor="itemAction">Action: </label>
//           <input type='text' id='itemAction' value={this.state.action} onChange={ this.getItemAction } />
//           {this.validateAction && <p className='validationElement'>{this.validateAction()}</p>}
//         </div>
//         <div>
//           <button disabled={this.validateItemName() || this.validateDescription() || this.validateInventory() || this.validateAction()} 
//                   type='submit' 
//                   onClick={ this.getItemModified }>
//                     Submit
//           </button>
//         </div>
//       </form>
//     );
//   }
// }

// EditItem.propTypes = {
//   history: PropTypes.object.isRequired
// }
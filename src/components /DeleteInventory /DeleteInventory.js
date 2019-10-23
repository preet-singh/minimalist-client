// import React from "react";
// import InventoryContext from '../../InventoryContext';
// import config from "../../config";
// import PropTypes from 'prop-types';

// export default class DeleteInventory extends React.Component {
//     static defaultProps = {
//       onDeleteInventory: () => {},
//     }
  
//     static contextType = InventoryContext;
  
//     handleDeleteInventory = (e) => {
//       e.preventDefault();
//       const id = this.props.inventory_id

//       fetch(`${config.API_ENDPOINT}/inventory/${id}`, {
//         method: "DELETE",
//         headers: {
//           "content-type": "application/json"
//         },
//       })
//         .then(res => {
//           if (!res.ok) return res.json().then(e => Promise.reject(e));
//           else return res.json();
//         })
//         .then(() => {
//           this.context.deleteInventory(id)
//           this.props.onDeleteInventory(id)
//         })
//         .catch(error => {
//           console.error({ error });
//         });
//     };
  
//     render() {
//       return (
//         <button
//           className='Inven_delete'
//           type='button'
//           onClick={this.handleDeleteInventory}
//         >DEL
//         </button>
//       );
//     }
//   }
  
//   DeleteInventory.propTypes = {
//     onDeleteInventory: PropTypes.func.isRequired
//   }
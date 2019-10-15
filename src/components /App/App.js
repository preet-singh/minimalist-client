import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import InventoryContext from '../../InventoryContext'
import ErrorPage from '../ErrorPage/ErrorPage';
import LandingPage from '../LandingPage/LandingPage.js';
import AddInventory from '../AddInventory/AddInventory';
import AddItem from '../AddItem/AddItem';
import ItemListNav from '../ItemListNav/ItemListNav';
import ItemListMain from '../ItemListMain/ItemListMain';
import ItemPageMain from '../ItemPageMain/ItemPageMain';
import ItemPageNav from '../ItemListNav/ItemListNav';
import LoginPage from '../LoginPage/LoginPage';
import RegistrationPage from '../RegistrationPage/RegistrationPage';
import config from '../../config';
import './App.css';



class App extends Component {
  state = {
    inventory: [],
    items: []
  }
  componentDidMount(){
    Promise.all([
      fetch(`${config.API_ENDPOINT}/items`),
      fetch(`${config.API_ENDPOINT}/inventory`)
    ])
      .then(([itemsRes, inventoriesRes]) => {
        if (!itemsRes.ok)
          return itemsRes.json().then(e => Promise.reject(e));
        if (!inventoriesRes.ok)
          return inventoriesRes.json().then(e => Promise.reject(e));

        return Promise.all([itemsRes.json(), inventoriesRes.json()]);
      })
      .then(([items, inventory]) => {
        this.setState({ items, inventory });
      })
      .catch(error => {
        console.error({ error });
      });
  }

  handleDeleteItem = itemId => {
    this.setState({
      items: this.state.items.filter(item => item.id !== item)
    });
  }

  handleDeleteInventory = inventoryId => {
    this.setState({
      inventories: this.state.inventories.filter(inventory => inventory.id !== inventory)
    });
  }

  addNewItem = newItem => {
    this.setState({
      items: this.state.items,
      newItem
    }, this.componentDidMount());
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
      inventories: [
        ...this.state.inventories,
        newInventory
      ]
    }, this.componentDidMount());
  }

  renderNavRoutes(){
    return (
      <>
        {['/', '/inventory/:inventoryId'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            component={ItemListNav}
          />
        ))}
        <Route path="/login" component={LoginPage} />
        <Route path="/item/:itemId" component={ItemPageNav} />
        <Route path="/add-inventory" component={ItemPageNav} />
        <Route path="/add-item" component={ItemPageNav} />
      </>
    );
  }

  renderMainRoutes() {
    return (
      <>
        {['/', '/inventory/:inventoryId'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            component={ItemListMain}
          />
        ))}
        <Route path="/registration" component={RegistrationPage} />
        <Route path="/item/:itemId" component={ItemPageMain} />
        <Route path='/add-inventory' component={AddInventory} />
        <Route path='/add-item' component={AddItem} />
      </>
    );
  }

  render(){
    const value = {
      inventory: this.state.inventory,
      items: this.state.items,
      addInventory: this.addNewInventory,
      deleteInventory: this.handleDeleteInventory,
      deleteItem: this.handleDeleteItem,
      addItem: this.addNewItem,
      editItem: this.editItem,
    };
    return (
      <InventoryContext.Provider value={value}>
        <div className="App">
          <nav className="App_nav">{this.renderNavRoutes()}</nav>
          <header className="App_header">
            <h1>
              <Link to="/">Minimalist</Link>{' '}
            </h1>
          </header>
          <LandingPage />
          <ErrorPage>
            <main className="App_main">{this.renderMainRoutes()}</main>
          </ErrorPage>
        </div>
      </InventoryContext.Provider>
    );
  }

}

export default App;


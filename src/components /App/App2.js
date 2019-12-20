import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
//import Header from '../Header/Header';
//import PrivateRoute from '../../routes/PrivateRoute';
//import PublicRoute from '../../routes/PublicRoute';
import ItemPageMain from '../ItemPageMain/ItemPageMain';
//import ItemListNav from '../ItemListNav/ItemListNav';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegPage from '../RegistrationPage/RegPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import TokenService from '../../services/token-service';
//import AuthApiService from '../../services/auth-api-service';
import IdleService from '../../services/idle-service';
import InventoryListPage from '../../routes/InventoryListPage';
import HomePage from '../HomePage /HomePage';
import config from '../../config';
import InventoryContext from '../../InventoryContext';
///import './App.css'

class App extends Component {
  state = {
    inventory: [],
    items: []
  }
  fetchInventoryAndItems = () => {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/items`),
      fetch(`${config.API_ENDPOINT}/inventory`)
    ])
      .then(([itemsRes, inventoryRes]) => {
        if (!itemsRes.ok)
          return itemsRes.json().then(e => Promise.reject(e));
        if (!inventoryRes.ok)
          return inventoryRes.json().then(e => Promise.reject(e));

        return Promise.all([itemsRes.json(), inventoryRes.json()]);
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
      items: this.state.items.filter(item => item.id !== itemId)
    });
  }

  handleDeleteInventory = inventoryId => {
    this.setState({
      inventory: this.state.inventory.filter(inventory => inventory.id !== inventoryId)
    })
  }

  addNewItem = newItem => {
    this.setState({
      items: this.state.items,
      newItem
    }, this.componentDidMount());
  }

  updateItem = updateItem => {
    this.setState({
      items: this.state.items.map(i => 
        (i.id !== updateItem.id) ? i : updateItem
        )
    });
  }

  addNewInventory = newInventory => {
    this.setState({
      inventory: [
        ...this.state.inventory,
        newInventory
      ]
    }, this.componentDidMount());
  }


  componentWillUnmount() {
    IdleService.unRegisterIdleResets()
    TokenService.clearCallbackBeforeExpiry()
  }

  logoutFromIdle = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
    this.forceUpdate()
  }

  render() {
    const value = {
      inventory: this.state.inventory,
      items: this.state.items,
      addInventory: this.addNewInventory,
      deleteInventory: this.handleDeleteInventory,
      deleteItem: this.handleDeleteItem,
      addItem: this.addNewItem,
      updateItem: this.updateItem,
    };

    return (
      <InventoryContext.Provider value={value}>
        <div className='App'>
            <Switch>
              <Route exact path={'/'} component={LandingPage} />
              <Route path={'/login'} component={LoginPage} />
              <Route path={'/register'} component={RegPage} />
              <Route path='/home' render={ () => <HomePage fetch = {this.fetchInventoryAndItems} /> } />
              <Route path={'/inventory'} component={InventoryListPage} />
              <Route path={'/item/:itemId'} component={ItemPageMain} />
              <Route component={ErrorPage} />
            </Switch>
        </div>
      </InventoryContext.Provider>

    )
  }
}

export default App
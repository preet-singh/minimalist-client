import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import InventoryContext from '../../InventoryContext'
import ErrorPage from '../ErrorPage/ErrorPage';
import LandingPage from '../LandingPage/LandingPage.js';
import AddInventory from '../AddInventory/AddInventory';
import AddItem from '../AddItem/AddItem';
import ItemListNav from '../ItemListNav/ItemListNav';
import ItemListMain from '../ItemListMain/ItemListMain';
import ItemPageMain from '../ItemPageMain/ItemPageMain';
import ItemPageNav from '../ItemPageNav/ItemPageNav';
import LogPage from '../LoginPage/LogPage';
import RegPage from '../RegistrationPage/RegPage';
import config from '../../config';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [],
      items: [],
      landing: false,
    }
  }
  // state = {
  //   inventory: [],
  //   items: [],
  //   landing: false,
  // }
  componentDidMount(){
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

  setLanding = landing => {
    this.setState({ landing })
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
        <Route path="/login" component={LogPage} />
        <Route path="/registration" component={RegPage} />
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
      updateItem: this.updateItem,
      setLanding: this.setLanding,
      landing: this.state.landing,
    };
    return (
      <InventoryContext.Provider value={value}>
        <div className="App">
          <LandingPage />      
          <nav className="App_nav">{this.renderNavRoutes()}</nav>
          <header className="App_header">
            <h1>
              <Link to="/">Minimalist</Link>{' '}
              <div className="About_nav">
                <Link to="" onClick={(e) => { 
                  window.localStorage.removeItem('minimalistSeenLanding');
                  this.setLanding(false);
                }}>About</Link>{' '}
              </div>
            </h1>
          </header>
          
          <ErrorPage>
            <main className="App_main">{this.renderMainRoutes()}</main>
          </ErrorPage>
          
        </div>
      </InventoryContext.Provider>
    );
  }

}

export default App;


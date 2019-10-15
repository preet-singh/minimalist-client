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



class App extends Component {
  state = {
    inventory: [],
    items: []
  }
  componentDidMount() {

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
        <Route path="/item/:itemId" component={ItemPageMain} />
        <Route path='/add-inventory' component={AddInventory} />
        <Route path='/add-item' component={AddItem} />
      </>
    );
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
          {/*<LandingPage />*/}
          <ErrorPage>
            <main className="App_main">{this.renderMainRoutes()}</main>
          </ErrorPage>
        </div>
      </InventoryContext.Provider>
    );
  }

}

export default App;


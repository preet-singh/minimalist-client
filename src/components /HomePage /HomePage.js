import React, { Component } from 'react';
//import './Homepage.css';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import Header from '../Header/Header';
import InventoryListPage from '../../routes/InventoryListPage';


class HomePage extends Component {

  componentDidMount() {
    this.props.fetch()
  }

  handleLogout= () => {
    TokenService.clearAuthToken()
  };

  render(){
    return (
      <div className="homepage">
        <div className="logout">
          <Link to='/' onClick={this.handleLogout}>
            <button className="logout-btn">Sign Out</button>
          </Link>
        </div>

        <Header />
        <InventoryListPage />
      </div>
    )
  }
};

export default HomePage;
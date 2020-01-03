import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { findIconDefinition, icon } from '@fortawesome/fontawesome-svg-core'; 
import './LandingPage.css';
import InventoryContextNew from '../../InventoryContextNew';
import InventoryContext from '../../InventoryContext';

library.add(
    fas
  );
  
const exit = findIconDefinition({ prefix: 'fas', iconName: 'times-circle' })
const exitIcon = icon(exit);

  export default class LandingPage extends Component {
    static contextType = InventoryContext; //now pulls the correct context
    state = {
      inProgress: false
    }
  
    render() {
      if (!window.localStorage.getItem('minimalistSeenLanding') && this.context.landing !== true) {
      return (
      <div className="fixed-whole-container">
        <section className="landing">
        <FontAwesomeIcon size='3x' className="exit-icon" icon={exitIcon} onClick={() => {
          this.context.setLanding(true);
		  window.localStorage.setItem('minimalistSeenLanding', true)}
         } />
          <div className="hero">
            <h3>Start to organize, revitalize and socialize all in one place</h3>
          </div>
          <div className="section-flex">
            <section className="section-one">
              <h2 className="section-h2">Create inventory</h2>
              <p className="section-p">Track all of your home inventory, add and delete as you declutter!</p>
            </section>
            <hr className="underline"></hr>
            <section className="section-two">
              <h2 className="section-h2">Create items within inventory</h2>
              <p className="section-p">Within separate inventory create as many items as you would like, delete them as you declutter</p>
            </section>
            <hr className="underline"></hr>
			<section className="section-three">
            <h2 className="section-h2">View below for a quick demo</h2>
            <img className="section-img" src="https://media.giphy.com/media/igOmPGMhALhTowFFux/giphy.gif" alt="gif" />
          </section>
          </div>
        </section>
      </div>
      )
      }
      else {
        return null;
      }
    }
  }
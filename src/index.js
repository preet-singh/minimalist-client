import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import App from './components /App/App';
//import App2 from './components /App/App2';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPlus, faChevronLeft, faTrashAlt, faCheckDouble, faMinus, faEdit,
} from '@fortawesome/free-solid-svg-icons'

library.add(faPlus, faChevronLeft, faTrashAlt, faCheckDouble, faMinus, faEdit)


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
);






import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';
import Content from './Content';
import ContentView from './ContentView';
import Header from './Header';
import Login from './Login';
import Register from './Register';
import SearchBar from './SearchBar';
import './MenuItem.css';


class MenuItem extends Component {
    

  render() {
    return (
        <div className="menubar">
          <ul className="menuitems">
            <a href="#t1"><li><h1>Comedy</h1></li></a>
            <a href="#t2"><li><h1>Romance</h1></li></a>
            <a href="#t3"><li><h1>Thriller</h1></li></a>
            <a href="#t4"><li><h1>Horror</h1></li></a>
          </ul>
        </div>
    );
  }
}
export default MenuItem;










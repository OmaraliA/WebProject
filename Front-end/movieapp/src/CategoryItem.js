import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Content from './Content';
import ContentView from './ContentView';
import Login from './Login';
import Menu from './Menu';
import MenuItem from './MenuItem';
import Register from './Register';
import SearchBar from './SearchBar';
import './CategoryItem.css';

class CategoryItem extends Component {
  render() {
    return (
    	<div>      		
  		  <div className="cards">
  			  <div className="card1"><p>Item1</p></div>
  			  <div className="card2"><p>Item2</p></div>
  			  <div className="card3"><p>Item3</p></div>
  		  </div>
    		<div className="cards">
  			  <div className="card1"><p>Item4</p></div>
  			  <div className="card2"><p>Item5</p></div>
  			  <div className="card3"><p>Item6</p></div>
  		  </div>
  		</div>
    );
  }
}

export default CategoryItem;

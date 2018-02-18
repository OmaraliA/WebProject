
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';
import Content from './Content';
import Login from './Login';
import Menu from './Menu';
import MenuItem from './MenuItem';
import Register from './Register';
import SearchBar from './SearchBar';
import './ContentView.css';



class ContentView extends Component {

	render() {
	    return (
	    	<div> 
	     		<CategoryItem/>       
	    	</div>
		);
	}
}

export default ContentView;
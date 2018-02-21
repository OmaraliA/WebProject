import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';
import Content from './Content';
import ContentView from './ContentView';
import Login from './Login';
import Menu from './Menu';
import MenuItem from './MenuItem';
import Register from './Register';

class ListToggle extends Component { 

	constructor(props){
		super(props);
		this.state ={toggled: false}
		this.handleClick = this.handleClick.bind(this);
	}

  	handleClick() {
	    if(this.state.toggled === true) {
	      this.setState({ toggled: false });
	    } else {
	      this.setState({ toggled: true }); 
	    }
	}
	render() {
	    return (
	      <div onClick={this.handleClick} data-toggled={this.state.toggled} className="ListToggle">
	        <div>
	          <i className="fa fa-fw fa-plus"></i>
	          <i className="fa fa-fw fa-check"></i>
	        </div>
	      </div>
	    );
	}
}


export default ListToggle;
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';
import ContentView from './ContentView';
import Header from './Header';
import Login from './Login';
import MenuItem from './MenuItem';
import Register from './Register';
import SearchBar from './SearchBar';
import './Content.css';

class Content extends Component {
  render() {
    return (
    	<div className="Content">
    		<div className="Top">
    			<Header/>
    		</div>
    		<div className="Bottom">
    			<ContentView/>
    		</div>
    	</div> 
    );
  }
}

export default Content;

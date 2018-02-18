
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';
import Content from './Content';
import ContentView from './ContentView';
import Header from './Header';
import Login from './Login';
import Menu from './Menu';
import MenuItem from './MenuItem';
import Register from './Register';
import SearchBar from './SearchBar';
import './Movie.css';



class Movie extends Component {

    

  render() {
    return (
     <div className="main"> 
       
        <div className="Left">
          <div> <Menu/></div>
        </div>

        <div className="Right">
          <div><Content/></div>
        </div>
       
    </div>

    );
  }
}


export default Movie;
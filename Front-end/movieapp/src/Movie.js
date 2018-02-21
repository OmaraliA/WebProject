
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

  constructor(props){
    super(props);
    this.state = {
      searchTerm:"", searchUrl:""
    }
  }

  apiKey: '67f7450bf1422bdcbf1d6b79ce7f1da1'
  
  handleKeyUp(e){
    if (e.key === 'Enter' && this.state.searchTerm !== '') {
      var searchUrl = "search/multi?query=" + this.state.searchTerm + "&api_key=" + this.apiKey;
      this.setState({searchUrl:searchUrl});
    }
  }

  handleChange(e){
      this.setState({searchTerm : e.target.value});    
  }

  render() {
    return (
     <div className="main"> 
        <div className="Left">
          <Menu/>
        </div>

        <div id="search" className="Search">
        <input onKeyUp={this.handleKeyUp} onChange={this.handleChange} 
                type="search" placeholder="Search for a title..." value={this.state.searchTerm}/>
        </div>
        
        <div className="Right">
          <div className="Top">
          <Header/>
        </div>

        <div className="Bottom">
        <ContentView title="Search Results" url={this.state.searchUrl} />
        <ContentView title="Top TV picks for Jack" url='discover/tv?sort_by=popularity.desc&page=1' />
        <ContentView title="Trending now" url='discover/movie?sort_by=popularity.desc&page=1' />
        <ContentView title="Most watched in Horror" url='genre/27/movies?sort_by=popularity.desc&page=1' />
        <ContentView title="Sci-Fi greats" url='genre/878/movies?sort_by=popularity.desc&page=1' />
        <ContentView title="Comedy magic" url='genre/35/movies?sort_by=popularity.desc&page=1' />
        </div>

        </div>
    </div>
    );
  }
}

export default Movie;
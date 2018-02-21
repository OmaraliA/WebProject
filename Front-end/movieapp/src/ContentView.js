
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

	apiKey: '67f7450bf1422bdcbf1d6b79ce7f1da1'

	constructor(props){
		super(props);
		this.state = {data: [], mounted: false}
	}
	
      loadContent() {
        var requestUrl = 'https://api.themoviedb.org/3/' + this.props.url + '&api_key=' + this.apiKey;
        fetch(requestUrl).then((response)=>{
            return response.json();
        }).then((data)=>{
            this.setState({data : data});
        }).catch((err)=>{
            console.log("There has been an error");
        });
      }

      componentWillReceiveProps(nextProps){
        if(nextProps.url !== this.props.url && nextProps.url !== ''){
          this.setState({mounted:true,url:nextProps.url},()=>{
            this.loadContent();
          });
          
        }
      }

      componentDidMount() {
        if(this.props.url !== ''){
          this.loadContent();
          this.setState({mounted:true});
        }
        
      }

      render() {
        var titles ='';
        if(this.state.data.results) {
          titles = this.state.data.results.map(function(title, i) {
            if(i < 5) {
              var name = '';
              var backDrop = 'http://image.tmdb.org/t/p/original' + title.backdrop_path;
              if(!title.name) {
                name = title.original_title;
              } else {
                name = title.name;
              }

              return (
                <CategoryItem key={title.id} title={name} score={title.vote_average} overview={title.overview} backdrop={backDrop} />
              );  

            }else{
              return (<div key={title.id}></div>);
            }
          }); 

        } 
        
        return (
          <div ref="titlecategory" className="ContentView" data-loaded={this.state.mounted}>
            <div className="Title">
              <h1>{this.props.title}</h1>
              <div className="titles-wrapper">
                {titles}
              </div>
            </div>
          </div>
        );
    }
}

export default ContentView;
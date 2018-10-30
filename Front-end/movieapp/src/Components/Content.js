import React, { Component } from 'react';
import ContentView from './ContentView';
import '../css/Content.css';


class Content extends Component {
  render() {
    const {movies, filterText} = this.props;
    return (
    	<div className="Content">
    		<div className="Bottom">
    			<ContentView 
                    movies = {movies} 
                    filterText={filterText }/>
    		</div>
    	</div> 
    );
  }
}
export default Content;


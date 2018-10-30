import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import '../css/ContentView.css';
import { Link } from 'react-router-dom';
import img1 from '../img/interstellar.jpg'
import img2 from '../img/aliceinwonderland.png'
import img3 from '../img/thebackupplan.jpeg'

class ContentView extends Component {
    render() {
        let filteredMovies = this.props.movies.filter(
            (movie) => {(movie.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1)});
        return(
            <ul>
                {
                  filteredMovies.map((movie) => {(<CategoryItem key={movie.id}
                  movie = {movie} showMore = {this.showMore}/>
                )})
                }
            </ul>
        );
    }
}

export default ContentView;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MovieCard from './MovieCard';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/movies')
      .then(response => {
        this.setState(() => ({ movies: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  saveMovie = (movie) => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(movie)
  }

  render() {
    return (
      <div className="movie-list">
        {this.state.movies.map(movie => (
          <MovieDetails saveMovie={this.saveMovie} key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

function MovieDetails({ movie, saveMovie }) {
  const { title, director, metascore, stars } = movie;
  return (
    <Link to={`/movies/${movie.id}`}>
      <MovieCard 
        title={title}
        director={director}s
        metascore={metascore}
        stars={stars}
        saveMovie={() => saveMovie(movie)}
      />
    </Link>
  );
}

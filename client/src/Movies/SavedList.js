import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.list.length < 1){
      return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        <p>You haven't saved any movies yet.</p>
        <Link to='/'>
          <div className="home-button">Home</div>
        </Link>
      </div>
      )
    }
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <span key={movie.title} className="saved-movie">{movie.title}</span>
        ))}
        <Link to='/'>
          <div className="home-button">Home</div>
        </Link>
      </div>
    );
  }
}

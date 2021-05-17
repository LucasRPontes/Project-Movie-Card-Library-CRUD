import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: {
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
      genre,
    } } = this.props;

    return (
      <div className="movie-card movie-card-body">
        <img className="movie-card-image" src={ imagePath } alt={ title } />
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
        <p className="rating movie-card-rating">{ rating }</p>
        <p className="rating movie-card-rating">{ genre }</p>
        <Link to="/movies/:id"> VER DETALHES </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  imagePath: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
}.isRequired;

export default MovieCard;

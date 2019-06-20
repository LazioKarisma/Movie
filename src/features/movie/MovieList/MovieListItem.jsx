import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Movie.scss';


class MovieListItem extends Component {
  render() {
    const { movie } = this.props;
    const imgMovie = '/assets/images/' + movie.title.toLowerCase().replace(/\s/g,'') + '.jpg';
    const segmentUri = movie.url.split('/');
   
    return ( 
      <Col xs="5" sm="6" md="4" lg="3">
        <div className="moviebox" href="#1">
          <img src={imgMovie} alt="abc" className="moviebox-img" />
          <div className="moviebox-shadow">
            <div className="moviebox-meta">
          
            </div>
            <div className="moviebox-hover">
              <div className="moviebox-hover-meta">
                <Link to={`/movie/${segmentUri[5]}`} className="btn btn-outline-">Lihat</Link>
              </div>
            </div>
          </div>
        </div>
      </Col>
    )
  }
}

export default MovieListItem
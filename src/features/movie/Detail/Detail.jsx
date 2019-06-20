import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { ErrorService } from '../../../services/api.service';
import MovieService from '../../../services/movie.service';
// import { swall } from '../../../commons/helper';
import LoadingOverlay from 'react-loading-overlay';

class Detail extends Component {
  state = {
    movie: {},
    coverMovie: '',
    isLoading: true,
    episode_id: {},
    
  }

  async getMovie() {
    try {
      const { match: { params } } = this.props;
      const res = await MovieService.getBy(params.id);
      this.setState({
        movie: res,
        coverMovie: '/assets/images/' + res.title.toLowerCase().replace(/\s/g,'') + '.jpg',
        isLoading: false
      })
    } catch (e) {
      if (e instanceof ErrorService) {
       
        
      }
    }
  }

  componentDidMount() {
    this.getMovie()
  }

  render() {
    const { movie, isLoading } = this.state;
    return (
      <div className="py-5">
        <Row>
          <Col xs="12" md="12">
            <div>{movie.director}</div>
            <h2>{movie.title}</h2>
            <div className="list-inline mb-2">
              <div className="list-inline-item">
                <b>Producer:</b> {movie.producer}
              </div>
              
            </div>
            <div className="list-inline mb-2">
              <div className="list-inline-item">
                <b>Release Date:</b> {movie.release_date} 
              </div>
              <div className="list-inline-item">
                <b>Episode:</b> {movie.episode_id}
              </div>
            </div>
            <p className="movieBox">{movie.opening_crawl}</p>
          </Col>
          <LoadingOverlay active={isLoading} spinner text='Loading..'></LoadingOverlay>
        </Row>
      </div>
    )
  }
}

export default Detail;
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MovieList from '../../features/movie/MovieList/MovieList';
import Detail from '../../features/movie/Detail/Detail';
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Container className="mt-5">
            <Route exact path="/" component={MovieList} />
            <Route path="/movie/:id" component={Detail} />
          </Container>
        </div>
      </div>
    );
  }
}

export default App;

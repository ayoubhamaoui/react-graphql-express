import React, { Component } from 'react';

//import components
import BookList from './components/BookList';

class App extends Component {
  render() {
    return (
      <div id="main">
        <h1>GraphQL Ayoub</h1>
        <BookList/>
      </div>
    );
  }
}

export default App;

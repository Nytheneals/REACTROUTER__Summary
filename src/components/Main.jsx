import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// COMPONENTS
// import PhotoGrid from "./PhotoGrid";
// import SingleView from "./SingleView";
// CSS
import '../css/_animations.css';
import '../css/_normalise.css';
import '../css/_style.css';
import '../css/_topography.css';

// COMPONENT
class Main extends Component {
  render() {
    return (
      <Router>
        <Route>
          <h1>
            <Link to="/">Kirste-gram</Link>
            {React.cloneElement(this.props.children, this.props)}
          </h1>
        </Route>
      </Router>
    );
  }
}

export default Main;

// {React.cloneElement(this.props.children, this.props)}
// THIS CLONES THE COMPONENTS THAT ARE THE CHILDREN OF THE MAIN COMPONENT INCLUDING THERE PARTICULAR PROPS.

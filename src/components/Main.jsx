import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// COMPONENTS
class Home extends Component {
  render() {
    return (
      <div>
        <h1> Home Alone!!</h1>
      </div>
    );
  }
}

class About extends Component {
  render() {
    return (
      <div>
        <h1>About What!!</h1>
      </div>
    );
  }
}

class Topics extends Component {
  render() {
    return (
      <div>
        <h1>Topics</h1>
        <li>
          <Link to="/topics/rendering"> Rendering with react</Link>
        </li>
        <li>
          <Link to="/topics/components"> Component</Link>
        </li>
        <li>
          <Link to="/topics/props-v-state"> Props V State</Link>
        </li>
        <h1>Please select the topic</h1>
      </div>
    );
  }
}
// COMPONENT
class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li className="_link">
              <Link to="/"> Home</Link>
            </li>
            <li className="_link">
              <Link to="/about">About</Link>
            </li>
            <li className="_link">
              <Link to="/topics"> Topics</Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </Router>
    );
  }
}

export default Main;

// {React.cloneElement(this.props.children, this.props)}
// THIS CLONES THE COMPONENTS THAT ARE THE CHILDREN OF THE MAIN COMPONENT INCLUDING THERE PARTICULAR PROPS.

// Most of the logic and programming will go here: fetching things from the API, handling events...

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Archer09',
      userData: [],
      userRepos: [],
      perPage: 5
    }
  }
  render () {
    return (
      <div>
        My App
      </div>
    )
  }
}



export default App

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

App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
}
App.defaultProps = {
  clientId: "7d88414967052b157652",
  clientSecret: "ef6b7e4730f0c46dda157d069fde28a31548f659"
}

export default App

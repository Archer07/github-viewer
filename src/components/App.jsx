// Most of the logic and programming will go here: fetching things from the API, handling events...

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Archer07',
      userData: {},
      userRepos: [],
      perPage: 5,
      bio:'',
      avatar:''
    }
  }
  // get user data from github
  getUserData() {
    $.ajax({
      url:'https://api.github.com/users/'+ this.state.username +"?client_id="+this.props.clientId+"&client_secret="+this.props.clientSecret,
      dataType:'json',
      cache:false,
      success: function(data) {
        this.setState({
          bio: data.bio,
          avatar:data.avatar_url
        });
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        alert(err);
      }.bind(this)
    });
  }
  componentDidMount() {
    this.getUserData()
  }
  render () {
    return (
      <div>
        <h2>{this.state.username}</h2>
        <div>
        <img src={this.state.avatar} width='250px'/>
        </div>
        <p className='col-md-3'>{this.state.bio}</p>
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

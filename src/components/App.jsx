// Most of the logic and programming will go here: fetching things from the API, handling events...

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Archer07',
      userData: {},
      userRepos: [],
      perPage: 10,
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
          userData:data
        });
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({username:null});
        alert(err);
      }.bind(this)
    });
  }
  // get User Repos
  getUserRepos() {
    $.ajax({
      url:'https://api.github.com/users/'+ this.state.username +"/repos?per_page="+this.state.perPage+"&client_id="+this.props.clientId+"&client_secret="+this.props.clientSecret+"&sort=created",
      dataType: 'json',
      cache:false,
      success: function(repos) {
        this.setState({userRepos:repos});
        console.log(repos);
      }.bind(this),
      error:function(xhr, status, err) {
        this.setState({userRepos:null});
        console.log(xhr.message);
        alert(err);
      }.bind(this)
    });
  }
  componentDidMount() {
    this.getUserData();
    this.getUserRepos();
  }
  handleFormSubmit(username) {
    this.setState({username:username}, () => {
      this.getUserData();
      this.getUserRepos();
    });
  }
  render () {
    return (
      <div>
        <Profile userData={this.state.userData} userRepos={this.state.userRepos} onFormSubmit={this.handleFormSubmit.bind(this)}/>
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

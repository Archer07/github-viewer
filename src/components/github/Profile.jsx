import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Profile extends Component {
  render() {
    return (
      <div className="row">
      <div className="col-md-3">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title text-center">{this.props.userData.name}</h3>
          </div>
          <div className="panel-body">
             <img className="img-responsive " src={this.props.userData.avatar_url} alt="Avatar"/>
          </div>
        </div>
        <div className="well">
          <p>{this.props.userData.bio}</p>
        </div>
      </div>
      <div className="col-md-7">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title text-center">User Info</h3>
          </div>
          <div className="panel-body">
            <div  className="row">
              <span className="label label-default">Repos: {this.props.userData.public_repos}</span>
              <span className="label label-primary">Gists: {this.props.userData.public_gists}</span>
              <span className="label label-success">Followers: {this.props.userData.followers}</span>
              <span className="label label-warning">Following: {this.props.userData.following}</span>
            </div>
            <div className='row'>
            <ul className="list-group col-md-10">
              <li className="list-group-item"><strong>Username: </strong> {this.props.userData.login} </li>
              <li className="list-group-item"><strong>Location: </strong> {this.props.userData.location} </li>
              <li className="list-group-item"><strong>Email Address: </strong> {this.props.userData.email || 'None'} </li>
              </ul>
            </div>
            <a href={this.props.userData.html_url} className="btn btn-success" target="_blank">Visit Profile</a>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Profile

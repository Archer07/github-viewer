import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Profile extends Component {
  render() {
    return (
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
    );
  }
}

export default Profile

import React, {Component} from 'react';


class RepoList extends Component {
  render() {
    return (
      <div className="row">
      {this.props.userRepos.map((repo) => {
        return (
          <div className="panel panel-default repo-body">
            <div className="panel-heading">{repo.name}</div>
            <div className="panel-body">
              <p>{repo.description || "No description provided"}</p>
              <a href={repo.html_url} className="btn btn-success btn-xs">Github Link</a>
            </div>
          </div>
        );
      })}
      </div>
    );
  }
}

export default RepoList

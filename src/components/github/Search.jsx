import React, {Component} from 'react';


class Search extends Component {
  onSubmit(e) {
    e.preventDefault();
    let username = this.refs.username.value.trim();
    if (!username) {
      alert('Please enter a username!');
      return;
    }
    this.props.onFormSubmit(username);
    this.refs.username.value = "";
  }
  render() {
    return (
      <div className="col-md-9 col-md-offset-2 search-form">
          <form onSubmit={this.onSubmit.bind(this)} role="search">
          <div className="form-group">
            <input className="form-control" ref="username" placeholder="Search by username..." type="text"/>
          </div>
        </form>

      </div>
    );
  }
}

export default Search

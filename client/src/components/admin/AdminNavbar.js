import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class AdminNavbar extends Component {
  render() {
    return (
      <nav>
        <div class="sidenav">
          <Link to="/">Home</Link>
          <Link to="/">Roles</Link>
          <Link to="/">Technical Coach List</Link>
          <Link to="/">Overall Ratings</Link>
        </div>
      </nav>
    )
  }
}

export default AdminNavbar
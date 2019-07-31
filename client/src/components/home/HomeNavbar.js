import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class HomeNavbar extends Component {
  render() {
    return (
      <nav>
        <div class="sidenav">
          <Link to="/">Signup</Link>
          <Link to="/">Login</Link>
          <Link to="/">Logout</Link>
        </div>
      </nav>
    )
  }
}

export default HomeNavbar
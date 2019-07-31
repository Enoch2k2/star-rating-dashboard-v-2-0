import React, { Component } from 'react'
import { HomeNavbar } from '../../components/home';
import '../../stylesheets/AdminLayout.css';

export class HomeLayout extends Component {
  render() {
    return (
      <div>
        <HomeNavbar />
        <div className="main">
          <h1>Star Rating Dashboard</h1>
        </div>
      </div>
    )
  }
}

export default HomeLayout
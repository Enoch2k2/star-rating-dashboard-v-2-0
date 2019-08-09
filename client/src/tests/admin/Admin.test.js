import React from 'react';
// import ReactDOM from 'react-dom';
import '../setupTests';
import { shallow } from 'enzyme';
import App from '../../App';
import { AdminLayout } from '../../containers/admin';
import { AdminNavbar } from '../../components/admin';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

describe('Admin', () => {
  it('Root route renders Admin Layout if logged in as admin', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Route exact path="/" component={ AdminLayout } />)).toEqual(true);
  });
  
  it('AdminLayout container includes the AdminNavbar', () => {
    const wrapper = shallow(<AdminLayout />);
    expect(wrapper.contains(<AdminNavbar />)).toEqual(true);
  });
  
  it('AdminNavbar component includes all admin links', () => {
    const wrapper = shallow(<AdminNavbar />);
    expect(wrapper.find(Link).first().props().children).toEqual("Home");
    expect(wrapper.find(Link).at(1).props().children).toEqual("Roles");
    expect(wrapper.find(Link).at(2).props().children).toEqual("Technical Coach List");
    expect(wrapper.find(Link).at(3).props().children).toEqual("Overall Ratings");
  });
})
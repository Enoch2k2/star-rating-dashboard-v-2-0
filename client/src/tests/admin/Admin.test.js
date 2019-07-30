import React from 'react';
// import ReactDOM from 'react-dom';
import '../setupTests';
import { shallow } from 'enzyme';
import App from '../../App';
import { AdminLayout } from '../../containers/admin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

it('Root route renders Admin Layout if logged in as admin', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<Route exact path="/" component={ AdminLayout } />)).toEqual(true);
});

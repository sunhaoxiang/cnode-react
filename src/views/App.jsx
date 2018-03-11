import React, { Component } from 'react';
import Router from '../config/router';
import { Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router />
      </div>
    );
  }
};

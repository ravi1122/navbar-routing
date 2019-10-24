import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const LANGS = {
  python: 'Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python design philosophy emphasizes code readability through use of significant whitespace',
  android: 'Android is a mobile operating system based on a modified version of the Linux kernel and other open source software, designed primarily for touchscreen mobile devices such as smartphones and tablets',

};

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLang: ''
    };
  }

  onChangeLang = e => {
    e.preventDefault();

    console.log('e =----> ', e)

    this.setState({ currentLang: e.target.value });
  }

  render() {
    return (
      <React.Fragment>

        <div className="navbar">
          <ul>
            <li><Link className="link" to="/career" title="career">Jobs</Link></li>
            <li><Link className="link" to="/inbox" title="Inbox">Inbox</Link></li>
            <li><Link className="link" to="/calendar" title="Calendar">Calendar</Link></li>
            <li><Link className="link" to="/careerPage" title="Career Page">Career Page</Link></li>
            <li><Link className="link" to="/reports" title="Reports">Reports</Link></li>
          </ul>

        </div>
        <hr />
        <select onChange={this.onChangeLang}>
          <option value="python"  disabled ="disabled" selected="selected" className="option1">Python</option>
          <option value="python">Python Dev</option>
          <option value="android">Android</option>
        </select>

        <br />
        <br />
        <div>
          {LANGS[this.state.currentLang]}
        </div>
      </React.Fragment>
    );
  }
}

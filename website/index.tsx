import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownPreview from '@uiw/react-markdown-preview';
import GitHubCorners from '@uiw/react-github-corners';
import logo from './logo.svg';
import Example from './Example';
import MDStr from '../README.md';
import './App.css';

ReactDOM.render(
  <div className="App">
    <GitHubCorners fixed target="__blank" href="https://github.com/uiwjs/react-only-when" />
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>A declarative component for conditional rendering.</p>
      <div>
        <Example />
      </div>
    </header>
    <MarkdownPreview source={MDStr} className="info" />
  </div>,
  document.getElementById('root'),
);

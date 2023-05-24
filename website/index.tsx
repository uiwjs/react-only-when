import { createRoot } from 'react-dom/client';
import MarkdownPreview from '@uiw/react-markdown-preview';
import GitHubCorners from '@uiw/react-github-corners';
import logo from './logo.svg';
import Example from './Example';
import MDStr from '../README.md';
import './App.css';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <div className="App">
    <GitHubCorners fixed target="__blank" href="https://github.com/uiwjs/react-only-when" />
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>A declarative component for conditional rendering.</p>
      <div>
        <Example />
      </div>
    </header>
    <MarkdownPreview 
      wrapperElement={{
        "data-color-mode": "light"
      }}
      source={MDStr} 
      className="info"
    />
  </div>
);

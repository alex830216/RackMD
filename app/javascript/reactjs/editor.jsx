import MarkdownEditor from '@uiw/react-markdown-editor';
import React from 'react';
import ReactDOM from 'react-dom';

const Dome = () => (
  <MarkdownEditor
    value={this.state.markdown}
    onChange={this.updateMarkdown}
  />
);

ReactDOM.render(<Dome />, document.getElementById('app'));

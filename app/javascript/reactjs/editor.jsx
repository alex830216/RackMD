import React from "react";
import ReactDOM from "react-dom";
import MarkdownEditor from '@uiw/react-markdown-editor';

const title2 = {
  name: 'title2',
  keyCommand: 'title2',
  icon: (
    <svg width="500" height="500" viewBox="0 0 500.00001 500.00001">
      <path fill="currentColor" d="m 260.82448,785.61393 c 25.73284,6.18424 30.19416,41.70762 31.34497,65.7243 1.60085,33.40867 -17.20296,65.77886 -34.67954,94.79471 -13.49246,22.40113 -18.82502,55.50456 -48.68476,60.66856 -15.16407,2.6226 -15.57945,-21.71249 -18.67359,-36.02195 -6.88889,-31.85887 7.10498,-63.70624 14.67213,-95.42664 4.98258,-20.88635 1.50328,-45.79494 14.67209,-63.19646 9.7015,-12.81972 25.21194,-30.4206 41.3487,-26.54252 z" />
    </svg>
  ),
  execute: (editor, selection, position) => {
    const value = selection ? `## ${selection}` : '## ';
    editor.replaceSelection(value);
    position.ch = !!selection ? position.ch : position.ch + 3;
    editor.setCursor(position.line, position.ch);
    editor.focus();
  },
};

const Dome = () => (
  <MarkdownEditor
    value="Hello Markdown!"
    toolbars={[
      'bold', 'italic', 'strike', 'header',
      'code', 'quote', 'olist', 'ulist', 'todo',
      'link', 'image', 'title2'
    ]}
    height="800px"
    visible
  />
);

document.addEventListener('turbolinks:load', () => {
  ReactDOM.render(<Dome />, document.getElementById('editor'));
})


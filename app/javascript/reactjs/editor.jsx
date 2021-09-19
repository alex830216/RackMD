import React from "react";
import ReactDOM from "react-dom";
import marked from "marked";

marked.setOptions({
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
  // highlight: (code) => hljs.highlightAuto(code).value
})

const renderer = new marked.Renderer();

function App() {
  const [text, setText] = React.useState("");

  return(
    <div>
      <h1>My Markdown Previewer</h1>
      <textarea
        name="text"
        id="text"
        rows="10"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="textarea">
      </textarea>
      <h1>Output</h1>
      <Preview markdown={text} />
    </div>
  );
}

function Preview({ markdown }) {
  return (
    <div
      dangerouslySetInnerHTML={{
      __html: marked(markdown, { renderer: renderer }),
    }}
    id="preview"
    ></div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
      <App />,
      document.getElementById('app')
    )
  }
)
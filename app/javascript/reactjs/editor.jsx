import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/themes/prism-okaidia.css';

function BlankCodeBlock({ value }) {
	return <pre className="language-">{value || ''}</pre>;
}

function CodeBlock({ language, value }) {
	// 1. no language was typed
	// or 2. language doesnt exist
	if (!language || !Prism.languages[language] || !value)
		return <BlankCodeBlock value={value} />;

	var html = Prism.highlight(value, Prism.languages[language]);
	var cls = 'language-' + language;

	return (
		<pre className={cls}>
			<code dangerouslySetInnerHTML={{ __html: html }} className={cls} />
		</pre>
	);
}


function App() {
	const [markdown, setMarkdown] = useState('# sup');

	return (
		<StyledApp>
			<StyledEditor>
				<textarea
					onChange={e => setMarkdown(e.target.value)}
					value={markdown}
				/>
			</StyledEditor>

			<StyledPreview>
				<ReactMarkdown children={markdown} components={{ code: CodeBlock }} />
			</StyledPreview>
		</StyledApp>
	);
}

const StyledApp = styled.div`
	display: flex;
	width: 100%;
	height: 70vh;

	div {
		flex: 1;
		padding: 10px;
	}
`;

const StyledEditor = styled.div`
	background: ;

	textarea {
		width: 100%;
		padding: 5px;
		height: 100%;
		border-radius: 5px;
		border: 1px solid #e2e2e2;
    background: #333;
    color: #ABB2BF;
	}
`;

const StyledPreview = styled.div`
	background: #f8f8f8;

	pre {
		background: #fff;
		color: red;
		padding: 30px;
	}
`;


document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
      <App />,
      document.getElementById("app")
    )
  }
 )
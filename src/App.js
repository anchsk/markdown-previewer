import React, { useState } from "react";
import "./App.scss";
import marked from "marked";
import DOMPurify from "dompurify";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const placeholderText =
    '# Header H1\n\n## Sub header H2\n\n`code`\n\n```javascript\nalert("alert!");\n\n```\n\n![image]( https://source.unsplash.com/200x200?italy "Image")\n\nNumbered list:\n\n1. List item\n2. List item\n3. List item\n\n>This is a blockquote\nthat is two lines long\n\n*italic*\n\n**bold**\n\n[link](link)';

  marked.setOptions({
    breaks: true,
  });

  const [input, setInput] = useState(placeholderText);
  const [output, setOuptut] = useState(
    DOMPurify.sanitize(marked(placeholderText))
  );

  const handleChange = (e) => {
    setInput(e.target.value);
    setOuptut(DOMPurify.sanitize(marked(e.target.value)));
  };

  return (
    <div>
      <Header />

      <main>
        <div className="left">
          <textarea
            onChange={handleChange}
            onKeyPress={handleChange}
            value={input}
            name=""
            id="editor"
            rows="35"
          ></textarea>
        </div>

        <div className="right">
          <div id="preview" dangerouslySetInnerHTML={{ __html: output }}></div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;

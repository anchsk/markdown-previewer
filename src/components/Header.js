import React from 'react'

const Header = () => {
 return (
  <div className="header">
      <h1 className="title"> <span role="img" aria-label="Image of a noteboook">📝</span> Markdown Previewer</h1>
        <p>Made with <a href="https://github.com/markedjs/marked" target="_blank" rel="noopener noreferrer">Marked.js</a> and <a href="https://github.com/cure53/DOMPurify" target="_blank" rel="noopener noreferrer">DOMPurify</a></p>
  </div>
 )
}

export default Header
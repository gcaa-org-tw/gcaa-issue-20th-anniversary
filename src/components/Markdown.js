import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown';

class Markdown extends Component {
  render() {
    return (
      <div class="text-break">
        <ReactMarkdown>
          { this.props.content }
        </ReactMarkdown>
      </div>
    )
  }
}
export default Markdown

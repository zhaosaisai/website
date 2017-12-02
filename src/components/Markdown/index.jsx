import React from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './CodeBlock'
import 'static/markdown.scss'

// const initialSource = `
// # Live demo

// Changes are automatically rendered as you type.

// * Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
// * Renders actual, "native" React DOM elements
// * Allows you to escape or skip HTML (try toggling the checkboxes above)
// * If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!

// ## HTML block below

// <blockquote>
//   This blockquote will change based on the HTML settings above.
// </blockquote>

// ## How about some code?
// \`\`\`js
// var React = require('react');
// var Markdown = require('react-markdown');

// React.render(
//   <Markdown source="# Your markdown here" />,
//   document.getElementById('content')
// );
// \`\`\`

// Pretty neat, eh?

// ## Tables?

// | Feature | Support |
// | ------ | ----------- |
// | tables | ✔ |
// | alignment | ✔ |
// | wewt | ✔ |

// ## More info?

// Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)

// ---------------

// A component by [VaffelNinja](http://vaffel.ninja) / Espen Hovlandsdal
// `


export default class Markdown extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { markdownSrc } = this.props
        return (
            <div className="markdown-body">
                <ReactMarkdown 
                    source={ markdownSrc }
                    renderers={{ code: CodeBlock }}
                    escapeHtml={false}
                />
            </div>
        )
    }
}
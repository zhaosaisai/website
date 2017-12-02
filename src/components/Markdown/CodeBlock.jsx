import React from 'react'
import PropTypes from 'prop-types'
import hljs from 'highlight.js'

export default class CodeBlock extends React.Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        language: PropTypes.string
    }

    static defaultProps = {
        language: ''
    }

    constructor(props) {
        super(props)
        this.setRef = this.setRef.bind(this)
    }
    componentDidMount() {
        this.highlightCode()
    }

    componentDidUpdate() {
        this.highlightCode()
    }

    highlightCode() {
        hljs.highlightBlock(this.codeEl)
    }

    setRef(el) {
        this.codeEl = el
    }

    render() {
        return (
            <pre>
                <code ref={this.setRef} className={this.props.language}>
                    {this.props.value}
                </code>
            </pre>
        )
    }
}
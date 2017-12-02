import React from 'react'
import 'static/main.scss'

export default class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="full-width content-container">
                <div className="main">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
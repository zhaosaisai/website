import React from 'react'
import 'static/main.scss'

const MainHeader = (props) => {
    return (
        <div className="tag-header">
            <span className="current-tag">
                最新文章
            </span>
            <span className="clickable">
                最新文章
            </span>
            <span>
                最新文章
            </span>
            <span>
                最新文章
            </span>
        </div>
    )
}

export default class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="full-width content-container">
                <div className="main">
                    <MainHeader />
                    {this.props.children}
                </div>
            </div>
        )
    }
}
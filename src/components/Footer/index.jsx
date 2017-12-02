import React from 'react'
import 'static/footer.scss'

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <footer className="ft">
                <span className="copyright">2017 2json独立开发</span>
                <span className="copyright">All rights reserved.</span>
            </footer>
        )
    }
}
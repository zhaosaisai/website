import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import emoji from 'node-emoji'
import Footer from 'components/Footer'

import 'static/nav.scss'

const NavItem = (props) => (
    <Link to={props.path} activeClassName="active-link">
        {props.title}
    </Link>
)

export default class Nav extends React.Component {
    static propTypes = {
        navs: PropTypes.array.isRequired
    }
    static defaultProps = {
        navs: []
    }
    constructor(props) {
        super(props)
    }

    render() {
        const { navs } = this.props
        return (
            <div className="nav-container">
                <div className="nav-bar-inner">
                    <Link to="/">
                        藏经阁 {emoji.get("laughing")} {emoji.get("laughing")} {emoji.get("laughing")}
                    </Link>
                </div>
                <div className="nav-link-wrapper">
                    {
                        navs.map(nav => <div className="nav-link" key={nav['path']}><NavItem {...nav}/></div>)
                    }
                </div>
                <Footer />
            </div>
        )
    }
}
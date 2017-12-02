import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import cx from 'classnames'
import 'static/tag.scss'

export default class Tag extends React.Component {
    static propTypes = {
        isLink: PropTypes.bool,
        id: PropTypes.number,
        pathPrefix: PropTypes.string,
        name: PropTypes.string,
        className: PropTypes.string
    }
    static defaultProps = {
        isLink: true,
        className: ""
    }
    constructor(props) {
        super(props)
    }
    render() {
        const { isLink, pathPrefix, id, name, className } = this.props
        return (
            isLink 
            ? <Link to={`${pathPrefix}/${id}`}>
                <span className={cx("tag", className)}>{name}</span>
             </Link>
            : <span className={cx("tag", className)}>{name}</span>
        )
    }
}
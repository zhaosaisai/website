import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import cx from 'classnames'
import { formatDate } from 'util'
import 'static/tag.scss'

export default class Tag extends React.Component {
    static propTypes = {
        isLink: PropTypes.bool,
        id: PropTypes.number,
        pathPrefix: PropTypes.string,
        name: PropTypes.string,
        className: PropTypes.string,
        showTime: PropTypes.bool
    }
    static defaultProps = {
        isLink: true,
        className: "",
        pathPrefix: '/tag',
        showTime: false
    }
    constructor(props) {
        super(props)
    }
    render() {
        const { isLink, pathPrefix, id, name, className, showTime, create_time } = this.props
        return (
            isLink 
            ? <Link to={`${pathPrefix}/${id}`}>
                <span className={cx("tag", className)}><span>{name}</span>{showTime ? <span>{formatDate(create_time)}</span> : null}</span>
             </Link>
            : <span className={cx("tag", className)}><span>{name}</span>{showTime ? <span>{formatDate(create_time)}</span> : null}</span>
        )
    }
}
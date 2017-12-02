import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import 'static/tag.scss'

export default class Tag extends React.Component {
    static propTypes = {
        isLink: PropTypes.bool,
        id: PropTypes.number,
        pathPrefix: PropTypes.string,
        name: PropTypes.string
    }
    static defaultProps = {
        isLink: true
    }
    constructor(props) {
        super(props)
    }
    render() {
        const { isLink, pathPrefix, id, name } = this.props
        return (
            isLink 
            ? <Link to={`${pathPrefix}/${id}`}>
                <span className="tag">{name}</span>
             </Link>
            : <span className="tag">{name}</span>
        )
    }
}
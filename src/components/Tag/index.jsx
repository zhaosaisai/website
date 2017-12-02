import React from 'react'
import PropTypes from 'prop-types'

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
        isLink 
        ? <Link to={`${pathPrefix}/${id}`}>
            <span className="tag">{name}</span>
         </Link>
        : <span>{name}</span>
    }
}
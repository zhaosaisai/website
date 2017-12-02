import React from 'react'
import PropTypes from 'prop-types'
import statusReasonConfig from './statusReasonConfig'

const ErrorPageItem = (props) => {
    return (
        <div>
            {props.statusReason}
        </div>
    )
}

export default class ErrorPage extends React.Component {
    static propTypes = {
        statusCode: PropTypes.number,
        statusReason: PropTypes.string
    }
    
    static defaultProps = {
        statusCode: 404,
        statusReason: ''
    }

    constructor(props) {
        super(props)
    }

    render() {
        const { statusCode, statusReason } = this.props
        return <ErrorPageItem statusReason={statusReason || statusReasonConfig[statusCode]}/>
    }
}
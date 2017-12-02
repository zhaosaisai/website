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
        statusCode: PropTypes.number
    }
    
    static defaultProps = {
        statusCode: 404
    }

    constructor(props) {
        super(props)
    }

    render() {
        const { statusCode } = this.props
        return <ErrorPageItem statusReason={statusReasonConfig[statusCode]}/>
    }
}
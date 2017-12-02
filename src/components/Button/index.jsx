import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import 'static/button.scss'

export default class Button extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        onClick: PropTypes.func
    }
    static defaultProps = {
        className: '',
        style: {}
    }

    constructor(props) {
        super(props)
    }

    onClick() {
        const { onClick } = this.props
        onClick && onClick()
    }

    render() {
        const {className, style, disabled} = this.props

        return (
            <button 
                className={cx('base-button', className, {
                    disabled
                })} 
                style={style}
                onClick={this.onClick.bind(this)}
                disabled={disabled}
            >
                {this.props.children}
            </button>
        )
    }
}
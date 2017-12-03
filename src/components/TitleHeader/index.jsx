import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import 'static/titleHeader.scss'

export default class TitleHeader extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object
    }
    static defaultProps = {
        className: '',
        style: {}
    }
    constructor(props) {
        super(props)
    }
    render() {
        const { className, style } = this.props
        return (
            <header className={cx('title-header', className)} style={style}>
                {this.props.children}
            </header>
        )
    }
}
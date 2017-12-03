import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import 'static/pagePlaceholder.scss'

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
            <div className={cx('page-placeholder', className)} style={style}>
                {this.props.children}
            </div>
        )
    }
}
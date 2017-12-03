import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Tag from 'components/Tag'
import TitleHeader from 'components/TitleHeader'
import 'static/tagBadge.scss'

export default class Tags extends React.Component {
    static propTypes = {
        tags: PropTypes.array,
        currentTag: PropTypes.number
    }
    
    static defaultProps = {
        tags: [],
        currentTag: 0
    }

    constructor(props) {
        super(props)
    }

    render() {
        const { tags, currentTag } = this.props
        return (
            <div className="tag-badge-container">
                <TitleHeader>
                    文章标签
                </TitleHeader>
                <div className="tag-badge-wrapper">
                    {
                        tags 
                        && Array.isArray(tags)
                        && tags.map((tag, index) => {
                            return <div className="tag-badge-item" key={tag['id']}><Tag className={cx("tag-badge", {
                                "current-tag": currentTag == index
                            })} {...tag} showTime/></div>
                        })
                    }
                </div>
            </div>
        )
    }
}
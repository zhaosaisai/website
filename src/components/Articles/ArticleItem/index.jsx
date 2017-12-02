import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Link } from 'react-router'
import Tag from 'components/Tag'

export default class ArticleItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {
            showTags,
            content,
            create_by,
            create_time,
            description,
            id,
            tagInfo,
            title,
            uv
        } = this.props
       return (
            <div className={cx("article", {
                "showTags": showTags
            })}>
                <h3 className="article-title">
                    {title}
                </h3>
                <div className="article-time">
                    <span>
                        {create_by}/{create_time}
                    </span>
                </div>
                <div className="article-description">
                    {description}
                </div>
                {
                    showTags
                    ? <div className="article-tags">
                    
                      </div>
                    : null
                }
            </div>
       )
    }
}
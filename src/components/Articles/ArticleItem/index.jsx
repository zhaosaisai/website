import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Link } from 'react-router'
import { formatDate } from 'util'
import Tag from 'components/Tag'
import 'static/articleItem.scss'

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
                <Link to={`/article/${id}`}>
                    <h3 className="article-title">
                        {title}
                    </h3>
                    <div className="article-time">
                        <span>
                            {create_by} / {formatDate(create_time)}
                        </span>
                    </div>
                    <div className="article-description">
                        {description}
                    </div>
                </Link>
                {
                    showTags
                    ? <div className="article-tags">
                        {
                            tagInfo 
                            && Array.isArray(tagInfo)
                            && tagInfo.map(tag => {
                                return <Tag key={tag['id']} pathPrefix="/tag" isLink {...tag}/>
                            })
                        }
                      </div>
                    : null
                }
            </div>
       )
    }
}
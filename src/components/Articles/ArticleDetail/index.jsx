import React from 'react'
import ErrorPage from 'components/ErrorPage'
import Markdown from 'components/Markdown'
import Tag from 'components/Tag'
import { formatDate } from 'util'
import 'static/articleDetail.scss'

export default class ArticleDetail extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {
            title,
            create_by,
            create_time,
            content,
            tagInfo,
            error,
            errorMsg
        } = this.props
        return (
            error
            ? <ErrorPage statusReason={errorMsg}/>
            : <div className="article-content-wrapper">
                <div className="article-header">
                    <header>
                        {title}
                    </header>
                    <div className="article-create-info">
                        {create_by}  · {formatDate(create_time)}
                    </div>
                </div>
                <div className="article-content">
                    <Markdown 
                        markdownSrc={'# 123456'}
                    />
                </div>
                <footer className="article-tag">
                    {
                        tagInfo 
                        && Array.isArray(tagInfo)
                        && tagInfo.map(tag => {
                            return <Tag className="large" key={tag['id']} pathPrefix="/tag" isLink {...tag}/>
                        })
                    }
                </footer>
            </div>
        )
    }
}
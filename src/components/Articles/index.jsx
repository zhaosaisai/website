import React from 'react'
import ErrorPage from 'components/ErrorPage'
import ArticleItem from 'components/Articles/ArticleItem'

export default class Articles extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const { articles } = this.props
        return (
            articles.error
            ? <ErrorPage statusReason={articles.errorMsg}/>
            : <div>这是文章页面</div>
        )
    }
}
import React from 'react'
import http from 'http'
import { GET_ARTICLES } from 'http/api'
import Articles from 'components/Articles'

export default class ArticlesContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 1,
            articles: [],
            isLoadingArticle: false,
            hasMore: true
        }
    }
    componentDidMount() {
        this.getArticles()
    }
    getArticles() {
        this.setState({
            isLoadingArticle: true
        })
        http.get(GET_ARTICLES({index: this.state.index}))
        .then(data => {
            /**
             * 这一块是我偷懒才这样写的，放心，我会把错误处理拎出来的。
             */
            this.setState(prevState => {
                return {
                    index: data.error ? prevState.index : prevState.index + 1,
                    articles: data.error ? prevState.articles : [...prevState.articles, ...data.selectResults],
                    hasMore: data.error ? hasMore : data.hasMore,
                    isLoadingArticle: false
                }
            })
        })
    }
    render() {
        const { articles, isLoadingArticle, hasMore } = this.state
        return (
            <Articles 
                articles={articles}
                getArticles={this.getArticles.bind(this)}
                isLoadingArticle={isLoadingArticle}
                hasMore={hasMore}
            />
        )
    }
}
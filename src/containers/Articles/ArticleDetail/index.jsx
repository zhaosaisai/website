import React from 'react'
import http from 'http'
import ArticleDetail from 'components/Articles/ArticleDetail'
import { GET_ARTICLE_BY_ID } from 'http/api'

export default class ArticleDetailContainer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            article: {}
        }
    }

    componentDidMount() {
        http.get(GET_ARTICLE_BY_ID({
            id: this.props.params.id
        }))
        .then(article => {
            this.setState({
                article
            })
        })
    }

    render() {
        const { article } = this.state
        return (
            <ArticleDetail {...article}/>
        )
    }
}
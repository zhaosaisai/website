import React from 'react'
import { GET_TAG_ARTICLES } from 'http/api'
import http from 'http'
import TagArticle from 'components/TagArticles'

export default class TagArticleContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            articles: []
        }
    }

    componentDidMount() {
        http.get(GET_TAG_ARTICLES({
            id: this.props.params.id
        }))
        .then(data => {
            if(!data.error) {
                this.setState({
                    articles: data.articles
                })
            }
        })
    }

    render() {
        const { name } = this.props.params
        const {  articles } = this.state
        return (
            <TagArticle 
                tagName={name}
                articles={articles}
            />
        )
    }
}
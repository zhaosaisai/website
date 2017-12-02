import React from 'react'
import http from 'http'
import { GET_ARTICLES } from 'http/api'
import Articles from 'components/Articles'

export default class ArticlesContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 1,
            articles: []
        }
    }
    componentDidMount() {
        http.get(GET_ARTICLES({index: 1}))
            .then(data => {
                this.setState(prevState => {
                    return {
                        index: data.error ? prevState.index : prevState.index + 1,
                        articles: data
                    }
                })
            })
    }
    render() {
        const { articles } = this.state
        return (
            <Articles 
                articles={articles}
            />
        )
    }
}
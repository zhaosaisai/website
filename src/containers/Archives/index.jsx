import React from 'react'
import Archives from 'components/Archives'
import { GET_ARTICLE_ARCHIVE } from 'http/api'
import http from 'http'

export default class ArchivesContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            year: new Date().getFullYear(),
            years: [],
            articles: []
        }
    }
    
    componentDidMount() {
        const { year } = this.state
        this.getArchivesAndArticles(year)
    }

    handleYearChange(year) {
        console.log(year)
        if(year == this.state.year) return
        this.getArchivesAndArticles(year).then(value => {
            if(value) {
                this.setState({
                    year
                })
            }
        })
    }

    getArchivesAndArticles(year) {
        return http.get(GET_ARTICLE_ARCHIVE({
            year
        }))
        .then(data => {
            if(!data.error) {
                this.setState({
                    years: data.allYears,
                    articles: data.articleInfo
                })
                return true
            }
            return false
        })
    }

    render() {
        const { years, year, articles} = this.state
        return (
            <Archives 
                years={years}
                year={year}
                articles={articles}
                handleYearChange={this.handleYearChange.bind(this)}
            />
        )
    }
}
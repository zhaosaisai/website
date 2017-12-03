import React from 'react'
import PropTypes from 'prop-types'
// import TitleHeader from 'components/TitleHeader'
import MainHeader from 'components/MainHeader'
import ArticleItem from 'components/Articles/ArticleItem'
export default class TagArticles extends React.Component {
    static propTypes = {
        tagName: PropTypes.string,
        articles: PropTypes.array
    }

    static defaultProps = {
        tagName: '',
        articles: []
    }

    constructor(props) {
        super(props)
    }

    render() {
        const { tagName, articles } = this.props
        return (
            <div>
                <MainHeader 
                    archives={tagName}
                />
                <div className="article-wrapper">
                    {
                            articles.map(article => {
                                return <ArticleItem key={article['id']} showTags={true} {...article}/>
                            })
                    }
                </div>
            </div>
        )
    }
}
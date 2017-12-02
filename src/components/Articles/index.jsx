import React from 'react'
import PropTypes from 'prop-types'
import ErrorPage from 'components/ErrorPage'
import ArticleItem from 'components/Articles/ArticleItem'
import Button from 'components/Button'
import MainHeader from 'components/MainHeader'
import 'static/articles.scss'

export default class Articles extends React.Component {
    static propTypes = {
        getArticles: PropTypes.func,
        isLoadingArticle: PropTypes.bool,
        hasMore: PropTypes.bool
    }

    static defaultProps = {
        getArticles: () => {}
    }

    constructor(props) {
        super(props)
    }

    onButtonClick() {
        this.props.getArticles()
    }
    
    render() {
        const { articles, isLoadingArticle, hasMore } = this.props
        return (
            articles.error
            ? <ErrorPage statusReason={articles.errorMsg}/>
            : <div>
                <MainHeader />
                <div className="article-wrapper">
                    {
                            articles.map(article => {
                                return <ArticleItem key={article['id']} showTags={true} {...article}/>
                            })
                    }
                </div>
                {
                    articles && articles.length > 0 &&
                    <footer className="more">
                        {
                             hasMore ?
                             <Button 
                                className="load-more-button"
                                onClick={this.onButtonClick.bind(this)}
                                disabled={isLoadingArticle}
                            >
                                {isLoadingArticle ? '正在加载...' : '查看更多'}
                            </Button> : 
                            <span className="load-all-already">已加载全部</span>
                        }
                    </footer>
                }
            </div>
        )
    }
}
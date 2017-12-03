import React from 'react'
import PropTypes from 'prop-types'
import MainHeader from 'components/MainHeader'
import ArticleItem from 'components/Articles/ArticleItem'

/**
 * 样式直接打包在最顶层，以后分离的时候再引入
 */

export default class Archives extends React.Component {
    static propTypes = {
        years: PropTypes.array,
        year: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        articles: PropTypes.array,
        handleYearChange: PropTypes.func
    }
    static defaultProps = {
        years: [],
        articles: [],
        handleYearChange: () => {}
    }
    constructor(props) {
        super(props)
    }
    render() {
        const { years, year, articles, handleYearChange } = this.props
        return (
            <div>
                <MainHeader 
                    archives={years}
                    currentYear={year}
                    handleYearChange={handleYearChange}
                />
                <div className="article-wrapper">
                    {
                        articles.map(article => {
                            return <ArticleItem key={article['id']} showTags={false} {...article}/>
                        })
                    }
                </div>
            </div>
        )
    }
}
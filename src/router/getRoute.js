import React from 'react'
import {
    Router,
    Route,
    hashHistory,
    IndexRoute,
    Redirect
} from 'react-router'

import Articles from 'containers/Articles'
import ArticleDetail from 'containers/Articles/ArticleDetail'
import Tags from 'containers/Tags'
import TagArticles from 'containers/TagArticles'
import Categories from 'containers/Categories'
import Archives from 'containers/Archives'
import About from 'containers/About'
import ErrorPage from 'components/ErrorPage'

const onEnter = (props) => {
    const { id } = props.params
    if(!id || (parseInt(id) !== Number(id))) {
        hashHistory.replace('/404')
    }
}

const getRoute = (rootApp) => {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={rootApp}>
                <IndexRoute component={Articles}/>
                <Route path="/articles" component={Articles}></Route>
                <Route path="/tags" component={Tags}></Route>
                <Route path="/archives" component={Archives}></Route>
                <Route path="/categories" component={Categories}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/article/:id" component={ArticleDetail} onEnter={onEnter}></Route>
                <Router path="/tag/:name/:id" component={TagArticles} onEnter={onEnter}></Router>
                <Route path="/404" component={ErrorPage}></Route>
                <Redirect from='*' to='/404' />
            </Route>
        </Router>
    )
}

export default getRoute
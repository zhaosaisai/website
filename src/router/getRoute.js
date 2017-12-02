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
import Categories from 'containers/Categories'
import About from 'containers/About'
import ErrorPage from 'components/ErrorPage'

const getRoute = (rootApp) => {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={rootApp}>
                <IndexRoute component={Articles}/>
                <Route path="/articles" component={Articles}></Route>
                <Route path="/tags" component={Tags}></Route>
                <Route path="/categories" component={Categories}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/article/:id" component={ArticleDetail} onEnter={(props) => {
                    const { id } = props.params
                    if(!id || (parseInt(id) !== Number(id))) {
                        hashHistory.replace('/404')
                    }
                }}></Route>
                <Route path="/404" component={ErrorPage}></Route>
                <Redirect from='*' to='/404' />
            </Route>
        </Router>
    )
}

export default getRoute
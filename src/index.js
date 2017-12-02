import React from 'react'
import ReactDOM from 'react-dom'
import getRoute from 'router/getRoute'
import Nav from 'containers/Nav'
import Main from 'containers/Main'
import 'static/common.scss'

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="full container">
                <Nav />
                <Main>
                    {this.props.children}
                </Main>
            </div>
        )
    }
}

ReactDOM.render(
    getRoute(App),
    document.getElementById('app')
)
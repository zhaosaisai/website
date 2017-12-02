import React from 'react'
import ReactDOM from 'react-dom'
import getRoute from 'router/getRoute'
import Nav from 'containers/Nav'
import 'static/common.scss'

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="container">
                <Nav />
                {this.props.children}
            </div>
        )
    }
}

ReactDOM.render(
    getRoute(App),
    document.getElementById('app')
)
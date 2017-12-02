import React from 'react'
import Main from 'components/Main'

export default class MainContainer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Main>
                {this.props.children}
            </Main>
        )
    }
}
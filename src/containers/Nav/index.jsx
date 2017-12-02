import React from 'react'
import { Link } from 'react-router'
import navConfig from './navConfig'
import Nav from 'components/Nav'

export default class NavContainer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Nav navs={navConfig}/>
            </div>
        )
    }
}
import React from 'react'
import { Link } from 'react-router'
import navConfig from './navConfig'

export default class Nav extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                {
                    navConfig.map(nav => {
                        return (
                            <div key={nav['path']}>
                                <Link to={nav['path']}>
                                    {nav['title']}
                                </Link> 
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
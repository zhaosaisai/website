import React from 'react'
import Tags from 'components/Tags'
import { GET_ALL_TAGS } from 'http/api'
import http from 'http'

export default class TagsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tags: [],
            currentTag: 0
        }
    }

    componentDidMount() {
        http.get(GET_ALL_TAGS)
            .then(data => {
                if(!data.error){
                    this.setState({
                        tags: data.tags
                    })
                }
            })
        // start animation
        this.timer = setInterval(() => {
            this.setState(prevState => {
                return {
                    currentTag:  prevState.tags.length > 0 ? (++prevState.currentTag % prevState.tags.length) : prevState.currentTag
                }
            })
        }, 5000)
    }

    componentWillMount() {
        clearInterval(this.timer)
    }

    render() {
        const { tags, currentTag } = this.state
        return (
            <Tags 
                tags={tags}
                currentTag={currentTag}
            />
        )
    }
}
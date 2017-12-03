import React from 'react'

const MainHeader = (props) => {
    const archives = props.archives
    return (
        <div className="tag-header">
            {/* <span className="current-tag">
                最新文章
            </span>
            <span className="clickable">
                最新文章
            </span>
            <span>
                最新文章
            </span>
            <span>
                最新文章
            </span> */}
            {
                archives && typeof archives === 'string' ? <span className="current-tag">{archives}</span> : null
            }
        </div>
    )
}

export default MainHeader
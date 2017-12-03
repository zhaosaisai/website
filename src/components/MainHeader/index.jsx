import React from 'react'
import cx from 'classnames'

const MainHeader = (props) => {
    const { archives, currentYear, handleYearChange } = props
    return (
        <div className="tag-header">
            {
                archives && typeof archives === 'string' ? <span className="current-tag">{archives}</span> : 
                archives.map(archive => <span key={archive.year} className={cx({
                    "current-tag": archive.year == currentYear,
                    "clickable": archive.year != currentYear
                })}
                onClick={() => {
                        handleYearChange && handleYearChange(archive.year)
                    }}
                >{archive.year}</span>)
            }
        </div>
    )
}

export default MainHeader
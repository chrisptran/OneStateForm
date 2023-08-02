import React from 'react'

const Display = (props) => {
    const {title, timeSpent} = props;
    return (
        <div>
            <div>
                <h1>Title: {title}</h1>
                <h1>Time Spent (in minutes): {timeSpent}</h1>
            </div>
        </div>
    )
}

export default Display
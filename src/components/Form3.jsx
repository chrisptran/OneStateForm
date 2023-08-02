import React, { useState } from 'react'
import Display from './Display';

const Form3 = () => {
    const [title, setTitle] = useState("");
    const [timeSpent, setTimeSpent] = useState(20);
    const [isSubmitted, setIsSubmitted] = useState(false)

    const [titleError, setTitleError] = useState(true)
    const [timeSpentError, setTimeSpentError] = useState(false)

    const handleTitle = (e) => {
        setTitle(e.target.value)
        if(e.target.value.length < 5) {
            setTitleError("title must be at least 5 characters")
        } else {
            setTitleError(false)
        }
    }

    const handleTimeSpent = (e) => {
        setTimeSpent(e.target.value)
        if(e.target.value < 20) {
            setTimeSpentError("please spend at least 20 minutes on this bug")
        }else {
            setTimeSpentError(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // logic after submit
        //create the bug and send to backend

        if (!titleError && !timeSpentError) {
            console.log({ title, timeSpent })
            setIsSubmitted(true);
        } else {
            alert("invalid bug")
        }

    }

    const handleSubmitMessage = () => {
        if (isSubmitted) {
            return "Thank you for submitting the bug"
        } else {
            return "Please fill in the form"
        }
    }

    return (
        <div>
            <h1>Bug Tracker</h1>
            <form onSubmit={handleSubmit}>

                <h1>{handleSubmitMessage()}</h1>
                <div>
                    <label>Title</label>
                    <input type='text' name='title' onChange={handleTitle} value={title} />

        <span style={{color: "red"}}>{titleError}</span>
                </div>
                <div>
                    <label>Time Spent (in minutes)</label>
                    <input type='number' name='timeSpent'
                        onChange={handleTimeSpent}
                        value={timeSpent} />

<span style={{color: "red"}}>{timeSpentError}</span>
                </div>
                <button type='submit' disabled={titleError || timeSpentError}>Create Bug</button>
            </form>
            <Display title={title} timeSpent={timeSpent} />
        </div>

    )
}

export default Form3
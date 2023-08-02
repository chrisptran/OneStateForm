import React, { useState } from 'react'
import Display from './Display';

const Form1 = () => {
    const [title, setTitle] = useState("");
    const [timeSpent, setTimeSpent] = useState(20);
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // logic after submit
        //create the bug and send to backend
        console.log({title, timeSpent, isFixed: false }); 
        setIsSubmitted(true);
    }

    return (
        <div>
            <h1>Bug Tracker</h1>
            <form onSubmit={handleSubmit}>
                {
                    isSubmitted ? 
                    <h1>Thank you for submitting the bug</h1> :
                    <h1>Please fill in the form</h1>
                }
                <div>
                    <label>Title</label>
                    <input type='text' name='title' onChange={handleTitle} value={title} />
                {
                    title.length < 5 &&
                    <span style={{color: "red"}}>Title must be at least 5 characters</span>
                }
                </div>
                <div>
                    <label>Time Spent (in minutes)</label>
                    <input type='number' name='timeSpent'
                        onChange={(e) => setTimeSpent(e.target.value)}
                        value={timeSpent} />
                </div>
                <button type='submit'>Create Bug</button>
            </form>
            <Display title={title} timeSpent={timeSpent}/>
        </div>

    )
}

export default Form1
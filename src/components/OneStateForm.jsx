import React, { useState } from 'react'
import Display from './Display';

const OneStateForm = () => {

    const [formState, setFormState] = useState({
        title: "",
        timeSpent: 20
    })

    const [formError, setFormError] = useState(
        {
            title: true,
            timeSpent: false
        }
    )



    const handleInput = (e) => {

        const keyToUpdate = e.target.name
        const valueToUpdate = e.target.value

        setFormState({
            ...formState,
            [keyToUpdate]: valueToUpdate
        })

        const errors = { ...formError }



        switch(keyToUpdate) {
            case 'title':
                valueToUpdate.length < 5 ?
                errors.title = "title must be at least 5 characters" :
                errors.title = false
                break;
            case 'timeSpent':
                valueToUpdate < 20 ?
                errors.timeSpent = "please use 20 minute rule" :
                errors.timeSpent = false
                break;
        }
        setFormError(errors)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        // logic after submit
        //create the bug and send to backend
        if(!formError.title && !formError.timeSpent) {

            console.log(formState);

        } else {
            alert("invalid bug")
        }



    }

    return (
        <div>
            <h1>Bug Tracker</h1>
            <form onSubmit={handleSubmit}>


                <div>
                    <label>Title</label>
                    <input type='text' name='title' onChange={handleInput} value={formState.title} />

                    <span style={{ color: "red" }}>{formError.title}</span>
                </div>
                <div>
                    <label>Time Spent (in minutes)</label>
                    <input type='number' name='timeSpent'
                        onChange={handleInput}
                        value={formState.timeSpent} />
                    <span style={{ color: "red" }}>{formError.timeSpent}</span>

                </div>
                <button type='submit'>Create Bug</button>
            </form>
            <Display title={formState.title} timeSpent={formState.timeSpent} />
        </div>

    )
}

export default OneStateForm
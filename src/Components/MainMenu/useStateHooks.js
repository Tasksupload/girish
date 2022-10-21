import { React, useState } from 'react'

export default (props) =>
{
    // state object implementation
    var [stateEmail, setStateEmail] =useState("girish123@gmail.com")
    
    // state object change
    let handleStateEmail = () =>
    {
        setStateEmail("girishkumar123@gmail.com");
    }


    return (<>
            <div className="container p-5">
                    <h1>React Hooks UseState</h1>
                    {stateEmail}<br /><br />
                    <button onClick={handleStateEmail}>Update Email</button>
            </div>
            
        </>)

}
import React from "react";



class Myclass extends React.Component
{
    
    constructor(props)
    {
        super(props);
        this.state = 
        {
            email:"girish@gmail.com",
            phone:79582568456
        }
    }

    stateChange=()=>
    {
       this.setState({
          email: 'girish123@gmail.com',
          phone:7744558899
       })
    }

    //prepare the component_i/p
    render()
    {
        
        return(<>
            <div className="container p-5">
                <h1>React Class Component & state & events</h1>
                <p>Email is:{this.state.email}</p>
                <button onClick={()=> this.setState({email:'girishkumar@gmail.com'} )}>Change My Email</button>

                <p>Phone NO:{this.state.phone}</p>
                <button onClick={()=> this.setState({phone:8956232541} )}>Change My Email</button>
                <br /><br />
                <button onClick={() => this.stateChange()}>Update all changes</button>
            </div>    
                </>);
    }
}
export default Myclass
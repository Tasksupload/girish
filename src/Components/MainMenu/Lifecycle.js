import React, {Component} from "react";

class Lifecycle extends Component
{
    constructor(props)
    {
        super(props);
        this.state={}
        console.log(`*****Constructor_is_Mounting_Method*****`)
    }

    componentWillMount()
    {
        console.log(`*****ComponentWillMount_is_Mounting_Method*****`)
    }

    render()
    {
        console.log(`*****Render_is_Mounting_Method*****`)
        
        return(<>
            <div className="container p-5 text-center">
                <h2>React Class Component Life</h2>
            </div>    
                </>);
    }
    componentDidMount()
    {
        console.log(`*****ComponentDidMount_is_Mounting_Method*****`)
    }
}
export default Lifecycle
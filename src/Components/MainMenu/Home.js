
import React from "react"

import profile from "./../../assets/images/1.jpg"

import wall from "./../../assets/images/4.jpg"

var style = {
    backgroundImage: `url(${wall})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
}

function Home()
{
    return (
    <>
        <div className="jumbotron text-white p-5" style={style}>
           <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="h1 pt-5 mt-5">I Am Girish Kumar</h1>
                        <h5 className="bg-success p-2 mt-3 w-75 text-center">Front-End Developer</h5>
                    </div>
                    <div className="col-lg-6">
                       <img src={profile} className="w-75 mx-auto img-thumbnail" />
                    </div>
                </div>
            </div>

        </div>
    
    </>
    
    )
    
}
export default Home;
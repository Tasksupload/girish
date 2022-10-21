import React from "react"

import profile from "./../../assets/images/1.jpg"

function About()
{
    return (
        <>
         <div className="container-fluid" style={{backgroundColor:'#181444'}}>
         <div className="container p-5 w-75 text-center" >
            <h1 className="display-4 text-white fw-bold py-3">About</h1>
            <p className="text-white pb-3">

            </p>
            <div className="jumbotron text-white p-5" style={{borderRadius:'10px', backgroundColor:'#2a3341' }}>
                <div className="row" >
                    <div className="col-lg-6">
                    <div className="container w-100" >
                        <table className="table table-borderless text-white" >
                            <tbody>
                                <tr>
                                    <th></th>
                                    <td><img src={profile} style={{ bordeRadius:'20px', width:'35%', height:'60px'}} /> </td>

                                </tr>
                                <tr>
                                    <th>FULLNAME</th>
                                    <td>Girish Kumar</td>
                                </tr>
                                <tr>
                                    <th>BIRTHDAY</th>
                                    <td>08/09/1999</td>
                                </tr>
                                <tr>
                                    <th>Mobile-no</th>
                                    <td>985458965</td>
                                </tr>
                                <tr>
                                    <th>Email id</th>
                                    <td>girishKumar@gmail.com</td>
                                </tr>
                            </tbody>
                        </table>
                        </div> 
                    </div>
                    <div className="col-lg-6">
                        <h4>Skills</h4>
                        <p className="text-left">HTML & CSS</p>
                        <div className="progress" style={{height:'20px'}}>
                           <div className="progress-bar bg-success" style={{width:'95%'}}>95%</div>
                        </div>

                        <p className="text-left PT-4">BOOTSTRAP</p>
                        <div className="progress" style={{height:'20px'}}>
                           <div className="progress-bar bg-success" style={{width:'90%'}}>90%</div>
                        </div>

                        <p className="text-left">JAVASCRIPT</p>
                        <div className="progress" style={{height:'20px'}}>
                           <div className="progress-bar bg-success" style={{width:'85%'}}>85%</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
         </div>
        </>
    )
}
export default About;
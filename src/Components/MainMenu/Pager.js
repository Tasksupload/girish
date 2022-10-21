
import { React } from 'react'


export default (props) =>
{
    
    var numbers =[]
    var { totalpostsInAPI, maxDisplayrecordsPerButton, getButtonNumber}=props

    var numberOfButtons=Math.ceil(totalpostsInAPI/maxDisplayrecordsPerButton);
    for (let i=1; i<=numberOfButtons; i++)
    {
        numbers.push(i)
    }
   return(<>
           <div className="container p-5 ">
                <ul className="pagination pagination-lg justify-content-center">
                    {
                    numbers.map((bno,i)=>
                     <li className="page-item" key={i}>
                                <a className="page-link" onClick={()=>getButtonNumber(bno)}>{bno}</a>
                                </li>)
                            }
                </ul>
           </div>
       </>)
}


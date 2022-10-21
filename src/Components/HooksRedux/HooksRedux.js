import { React, useEffect } from 'react';

import { connect} from 'react-redux';

import EmpAction from './../../actions/empAction'
import UsersAction from './../../actions/userAction'
import StudentAction from './../../actions/studentAction'


import { bindActionCreators } from 'redux';


let HooksRedux = (props) =>
{
    useEffect(()=> 
        {
           props.EmpAction();
           props.UsersAction();
           props.StudentAction();
        },[])
    
        return(<>
                <div className="container p-5">
                <h2>React Redux Connection</h2>
                <h3>Synchronous Data from Redux_Action</h3>
                {
                    props.empdata.map((res,i) =>
                    {
                        return(<ul key={i}>
                            <li>{res.id}</li>
                            <li>{res.name}</li>
                            <li>{res.email}</li>
                        </ul>)
                    })
                }
                <h3>Asynchronous Data-1[Global Rest-Api] from Redux_Action</h3>
                {
                    props.userdata.map((res,i) =>
                    {
                        return(<ul key={i}>
                            <li>{res.id}</li>
                            <li>{res.name}</li>
                            <li>{res.email}</li>
                        </ul>)
                    })
                }
                <h3>Asynchronous Data-1[Local Rest-Api] from Redux_Action</h3>
                {
                    props.studentdata.map((res,i) =>
                    {
                        return(<ul key={i}>
                            <li>{res.id}</li>
                            <li>{res.name}</li>
                            <li>{res.email}</li>
                        </ul>)
                    })
                }
                
                </div>
                
        
        
           </>)
    }

const mapStateToProps  =(state) =>
{
    //console.log(state)
    return ({
         empdata:state.empReducer,
         userdata:state.userReducer,
         studentdata:state.studentReducer
        })
}

const mapDispatchToProps = (dispatch) =>
{
   return bindActionCreators({ EmpAction, UsersAction, StudentAction }, dispatch) 

}

export default connect(mapStateToProps,mapDispatchToProps)(HooksRedux)
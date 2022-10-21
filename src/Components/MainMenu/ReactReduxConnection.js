import { React, Component } from 'react';

import { connect} from 'react-redux';

import EmpAction from './../../actions/empAction'
import UsersAction from './../../actions/userAction'
import StudentAction from '../../actions/studentAction'


import { bindActionCreators } from 'redux';


class ReactReduxConnection extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {}
    }

    componentDidMount()
    {
        this.props.EmpAction();
        this.props.UsersAction();
        this.props.StudentAction();
    }

    render()
    {
        return(<>
                <div className="container p-5">
                <h2>React Redux Connection</h2>
                <h3>Synchronous Data from Redux_Action</h3>
                {
                    this.props.empdata.map((res,i) =>
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
                    this.props.userdata.map((res,i) =>
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
                    this.props.studentdata.map((res,i) =>
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

}
const mapStateToProps  =(state) =>
{
    console.log(state)
// get data from redux store by using reducer
    return ({
         empdata:state.empReducer,
         userdata:state.userReducer,
         studentdata:state.studentReducer
        })
}

const mapDispatchToProps = (dispatch) =>
{
// calling redux action
   return bindActionCreators({ EmpAction, UsersAction, StudentAction }, dispatch) 

}
//export default ReactReduxConnection;

export default connect(mapStateToProps,mapDispatchToProps)(ReactReduxConnection)
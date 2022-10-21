import axios from "axios"

const url="https://jsonplaceholder.typicode.com/users"

export default function UsersAction()
{
    return ({
        type: 'UserAction',
        payload: axios.get(url).then((result)=>result.data)
    })
}
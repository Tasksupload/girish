export default function userReducer(state= [], action)
{
    switch(action.type)
    {
        case 'UserAction':
            return action.payload; break;
        default:
            return state    
    }
}

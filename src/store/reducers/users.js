export default function usersReducer(state = {data:[]},action){
    switch(action.type){
        case "setUserList":
            return {
                ...state,
                data:action.payload.data
            }
        default:
            return state
    }
}
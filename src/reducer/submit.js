const usersData = [];
const SubmitReducer = (state = usersData, action)=>{
    switch(action.type){
        case "SUBMIT": return [...state, action.paylod];
        case "DELETE": return [...action.paylod];
        case "UPDATE": return [...action.paylod];
        default: return state;
    }
}

export default SubmitReducer
const initialState = {
    users:[],
    user: null,
    index: null
};
const SubmitReducer = (state = initialState, action)=>{
    switch(action.type){
        case "SUBMIT": return {...state, users:[...state.users,action.paylod]};
        case "DELETE": return {users:[...action.paylod]};
        case "UPDATE": return {users:[...action.paylod], user:null,index:null};
        case "EDIT": return {users:[...state.users], user:{...action.paylod},index: action.idd};
        default: return state;
    }
}

export default SubmitReducer
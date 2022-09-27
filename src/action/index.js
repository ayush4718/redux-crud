export const SubmitAction =(user)=>{
    return{ 
        type: "SUBMIT",
        paylod: user
    }
}
export const DeleteAction=(nUser)=>{
    return{
        type: "DELETE",
        paylod: nUser
    }
}
export const UpdateAction=(Editid,user,userDatas)=>{
    userDatas.splice(Editid,1,user);
    console.log("edit",userDatas)
    return{
        type: "UPDATE",
        paylod: userDatas
    }
}
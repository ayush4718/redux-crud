export const SubmitAction =(user)=>{
    return{ 
        type: "SUBMIT",
        paylod: user
    }
}
export const DeleteAction=(nUser,i)=>{
    const deletedata = nUser.filter((l,index)=>index!=i)
    return{
        type: "DELETE",
        paylod: deletedata
    }
}
export const UpdateAction=(nuser,Data,id)=>{
    Data.splice(id,1,nuser);
    console.log("edit",Data)
    return{
        type: "UPDATE",
        paylod: Data
    }
}
export const EditAction=(users,id)=>{
    console.log("edit",users)
    console.log("editiii",id)
    const Edit = users.find((l,x)=>x==id)
    return{
        type: "EDIT",
        paylod: Edit,
        idd: id
    }
}

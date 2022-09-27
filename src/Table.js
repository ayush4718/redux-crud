import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
// import { useSelector } from 'react-redux';
import SubmitReducer from './reducer/submit';
function Table(props) {
    console.log("props",props);
    const [userDatas,setuserDatas]=useState();
    const mapStateToProps=(state)=>{
        setuserDatas(state)
        return state
    }
    
    useEffect(mapStateToProps,[])
    const HandleDelete=(i)=>{
        const deletedata = userDatas.filter((l,index)=>index!=i)
        // console.log("de",deletedata)
        // dispatch(DeleteAction(deletedata));
    }
    const HandleEdit=(i)=>{
        const EditData=userDatas.find((l,index)=>index==i)
        // console.log("edit",EditData)
        // setuser(EditData)
        // seteditid(i)
        // setEditUp(true)
        
    }
    return (
    <div className="App-header" >
      <div className='App'>
        <table border={1} className='Tbl'>
                
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>E-mail</th>
                        <th>Date</th>
                        <th>Gender</th>
                        <th>Hobby</th>
                        <th>color</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                
                <tbody>
                    {userDatas && userDatas.map((l,i)=>{
                        return(
                        <>
                            <tr>
                                <td>{i+1}</td>
                                <td>{l.name}</td>
                                <td>{l.email}</td>
                                <td>{l.number}</td>
                                <td>{l.date}</td>
                                <td>{l.gender}</td>
                                <td>{l.Hobby.join(',')}</td>
                                <td>{l.color}</td>
                                <td><button onClick={()=>{HandleDelete(i)}}>Delete</button></td>
                                <td><button onClick={()=>{HandleEdit(i)}}>Edit</button></td>
                            </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    console.log("state",state);
   return { userData: state.SubmitReducer}
}


export default connect()(Table)
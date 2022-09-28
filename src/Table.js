import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DeleteAction, EditAction } from './action';
import Form from './form';
// import { useSelector } from 'react-redux';
import SubmitReducer from './reducer/submit';
function Table(props) {
    const navigate=useNavigate();
    const [userDatas,setuserDatas]=useState();

    
    useEffect(()=>{
        setuserDatas(props.userData.users)
    })
    const HandleDelete=(i)=>{
        props.deletes(userDatas,i)
    }
    const HandleEdit=(i)=>{
        props.edit(userDatas,i)
        navigate('/')
    }
    return (
        <div className="App-header" >
        {console.log("users",props.userData.user)}
      <div className='App'>
        <table border={1} className='Tbl'>
                
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th> Phone</th>
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
const mapDispatchToProps=(dispatch)=>{
    return{
        deletes: (user,i)=> dispatch(DeleteAction(user,i)),
        edit: (users,i)=> dispatch(EditAction(users,i))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Table)
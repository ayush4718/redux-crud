import React, { useEffect, useState } from 'react'
import { AfterEdit, DeleteAction, SubmitAction, UpdateAction } from './action';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Connect } from 'react-redux';

function Form(props) {
    const [NameE,setNameE]=useState();
    const [EmailE,setEmailE]=useState();
    const [NumberE,setNumberE]=useState();
    const [DateE,setDateE]=useState();
    const [GenderE,setGenderE]=useState();
    const [ColorE,setColorE]=useState();
    const[user,setuser]=useState({Hobby:[]});
    const[Editid,seteditid]=useState()
    const dispatch= useDispatch();
    const [userDatas,setuserDatas]=useState();
    const [EditUp,setEditUp]=useState(false)
    const location = useLocation();
    const navigate = useNavigate();
    const abc = useSelector((state)=>state.SubmitReducer);

    useEffect(()=>{
        if(abc.user){
            setuser(abc.user);
            console.log("id",abc.index)
            seteditid(abc.index)
        }
    },[abc])

    const handleChange= (event)=>{
        const name = event.target.name;
        const value=event.target.value;
        const Check=event.target.checked;
        if(name==='Hobby'){
            if(Check){
                setuser({...user,Hobby:[...user.Hobby,value]
                })
            }
            else{
                const ucheck= user.Hobby.filter((i)=>i!==value)
                setuser({...user,
                    Hobby : ucheck})
            }
        }
        else{
            setuser({...user,
                [name] : value
            });
        }
    }

    const handleSubmit=()=>{
        if(Validation()){
            if(abc.user){
                props.update(user,abc.users,Editid)
            }else{
                dispatch(SubmitAction(user));
            }
            setuser({Hobby:[]})
            navigate("/table")
        }
    }   
    
    function Validation(){
        const namev = /^[a-zA-Z\s]+$/;
        const emailv = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        const numberv = /^[1-9]\d{9}$/;
        let NameER = true;
        let emailEr = true;
        let numberEr = true;
        let dateEr = true;
        let genderEr = true
        let colorEr = true;
        // name validation
        if(!user.name){
            setNameE("Enter Your Name")
        }
        else if(namev.test(user.name)==false){
            setNameE("Enter Valid Name")
        }else{
            setNameE('')
            NameER=false;
        }
        // Email validation
        if(!user.email){
            setEmailE("Enter Your Email")
        }
        else if(emailv.test(user.email)==false){
            setEmailE("Enter Valid Email")
        }
        else{
            setEmailE("")
            emailEr=false;
        }
        // Number validation
        if(!user.number){
            setNumberE("Enter Your Number")
        }
        else if(numberv.test(user.number)==false){
            setNumberE("Enter Valid Number")
        }else{
            setNumberE(" ")
            numberEr=false;
        }
        // Date validation
        if(!user.date){
            setDateE("Enter Date")
        }else{
            setDateE("")
            dateEr=false;
        }
        // Gender validation
        if(!user.gender){
            setGenderE("Enter Your Gender")
        }else{
            setGenderE("")
            genderEr=false;
        }
        // Color validation
        if(!user.color){
            setColorE("Enter Your Favorite Coluor")
        }else{
            setColorE("")
            colorEr=false;
        }
        let vald = ( NameER || emailEr || numberEr || dateEr || genderEr || colorEr)
        if(vald === true){
            return false
        }else{
            return true
        }
    }

    return (
        <div className='App App-header'>
            <div className='Formdiv'>
            <form className='form' >
            <label >Name : </label> 
            <input className='i-name' type="text" name="name" value={user.name || ''}  onChange={handleChange} /> <span >{NameE || ''}</span><br/>
            <label >E-mail : </label>
            <input className='i-name' type="email" name="email" value={user.email || ''}  onChange={handleChange} /><span >{EmailE || ''}</span><br/>
            <label >Number : </label>
            <input className='i-name' type="number" name="number" value={user.number || ''}  onChange={handleChange} /> <span >{NumberE || ''}</span><br/>
            <label>Date : </label> 
            <input className='i-date'type="date" name="date" value={user.date || ''} placeholder="Date" onChange={handleChange} /><span >{DateE || ''}</span><br/>

            <label className='HB'>Gender : </label> <span >{GenderE || ''}</span><br/>
            <input className='i-radio Hobby' type="radio" id="gender" name="gender" checked={user.gender==="Male"} value="Male" onChange={handleChange} /> 
            <label >Male</label><br/>
            <input type="radio" className='i-radio Hobby' id="gender" name="gender" checked={user.gender==="Female"} value="Female" onChange={handleChange} /> 
            <label >Female</label><br/>
            <input type="radio" className='i-radio Hobby' id="gender" name="gender" checked={user.gender==="Other"} value="Other" onChange={handleChange} /> 
            <label  >Other</label><br/>

            <label className='HB'>Hobby : </label>
            <label className='Hobby'>Singing:</label>
            <input type="checkbox" name="Hobby" checked={user.Hobby?.includes('Singing')} onChange={handleChange} value="Singing" /><br/>
            <label className='Hobby'>Traveling:</label>
            <input type="checkbox" name="Hobby" checked={user.Hobby?.includes('Traveling')} onChange={handleChange} value="Traveling" /><br/>
            <label className='Hobby'>Driving:</label>
            <input type="checkbox" name="Hobby" checked={user.Hobby?.includes('Driving')} onChange={handleChange} value="Driving"  /><br/>
            <label className='HB'>Favorite Colour : </label> 
            <span style={{padding:"0",marginLeft:"15px"}}>{ColorE || ''}</span><br/>
            <input type="color" id="color" className='i-color' name="color" value={user.color || ''} onChange={handleChange} /><br/>
            <div className='sub'><NavLink onClick={handleSubmit}><input type="button" value="Submit"  className='button-6'  to="/" /></NavLink></div>
        </form>
            </div>
        
        </div>
    )
}
 
const mapDispatchToProps=(dispatch)=>{
    console.log("dispatch1234",dispatch)
    return{
        update: (nuser,all,id)=> dispatch(UpdateAction(nuser,all,id))
    }
}
export default connect(null,mapDispatchToProps)(Form)
import React from 'react'
import Login from '../Login/Login';
import { useState,useEffect } from "react";
import axios from "axios";
import Conversation from "./Conversation";
import {Link,Outlet} from "react-router-dom";
import SingleChat from './SingleChat';

const Home = () => {
  const token = localStorage.getItem("whatsapptoken");
  const [users,setUsers] =useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  //alert messages
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const handleClose = () => {
      window.location.reload();
      setOpen(false);
    };
    const handleClose1 = () => {
      window.location.reload();
      setOpen1(false);
    };
 
 

  //open form for new todo
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  //close form
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  // const userid = localStorage.getItem("DoctorLoginid")
  // useEffect(() => {
  //   const getConversations = async () => {
  //     try {
  //       const res = await axios.get(`http://localhost:8060/api/conversations/${userid}`);
  //       setConversations(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getConversations();
  // }, [userid]);

 

  

  

  

// get list of users
  useEffect(() => {
    const getdata= async()=>{
       let res = await fetch(`http://localhost:8060/user/allusers`,{
           method:"GET",
         });
         let data = await res.json();
         setUsers(data);
    }
    getdata();
 }, []);





//search patient by name
// const searchProduct = (e) => {
//   const value = e.target.value;
//   console.log(value);
//   axios.get(`https://doctor-patient-mock.herokuapp.com/patient/search?name=${value}`)
//     .then((res) => {
//       const { data } = res;
//        setPatient(data);
//     })
// };
 
//reset filters & sortings
const resetFilter = ()=>{
  window.location.reload();
}

  return (
    <>{token ? <>
      <div className='chathome'>
        <div className='usersdiv'> 
          {users.map((e)=>{
            return(
              <>
              <Link to={`/homechat/${e._id}`}>
              <div className='chatname'>
                <span><img src="https://www.svgrepo.com/show/32912/user.svg" alt="user" /><p>{e.name}</p></span>
              </div>
              </Link>
              </>
            )
          })}
        </div>
        <div className='chatbg'>
          <div>
            <SingleChat/>
          </div>
        </div>
      </div>
          
    </>:<Login/>}
    
    </>
    
  )
}

export default Home
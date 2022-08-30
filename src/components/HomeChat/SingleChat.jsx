import React from 'react'
import { useParams } from 'react-router';
import axios from "axios";
import { useState,useEffect } from 'react';

const SingleChat = () => {
    const {id} = useParams();
    const [formData, Setformdata] = useState({});
    const [msg,setMsg] = useState([]);
    const [mymsg,setMymsg] = useState([]);
    const userid = localStorage.getItem("whatsappid")

    useEffect(()=>{
      var msgData = {
        "senderid":id,
        "reciverid":userid
      };
      axios.post(`http://localhost:8060/message/allfor`, msgData, {
        headers: { "Content-Type": "application/json" },
      }).then((responce) => {
        const { data } = responce;
        setMsg(data);
      },[]);
    })

    useEffect(()=>{
      var msgData = {
        "senderid":userid,
        "reciverid":id
      };
      axios.post(`http://localhost:8060/message/allfor`, msgData, {
        headers: { "Content-Type": "application/json" },
      }).then((responce) => {
        const { data } = responce;
        setMymsg(data);
      },[]);
    })

    //  changes on input
    const handleChange = (e)=>{
    let name = e.target.name;
    Setformdata({
    ...formData,
    [name]: e.target.value,
    senderid: userid,
    reciverid: id
    })
   };

    //  post new pateint  http://localhost:8060/message/allfor
    const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(formData);
    axios.post(`http://localhost:8060/message/new`, formData, {
        headers: { "Content-Type": "application/json" },
      }).then((responce) => {
        const { data } = responce;
        window.location.refresh();
      });
  };

  return (
    <>
    <div className='msgarea'>
      <div>
        {msg && msg.map((e)=>{
        return(
        <>
        <span>{e.msg}</span><br></br><br></br>
        </>
        )
        })}
      </div>
      <div className='sentmsg'>
      {mymsg && mymsg.map((e)=>{
        return(
        <>
        <span>{e.msg}</span><br></br><br></br>
        </>
        )
      })}
    </div>
    </div>
    <div className='msginput'>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Type Something...' name="msg" onChange={handleChange}/>
            <input type="submit" value="Send"/></form>
    </div>
    </>
  )
}

export default SingleChat
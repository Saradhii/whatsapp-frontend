import React from 'react';
import "../Header/styles.css";
import Alert from '@mui/material/Alert';
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Home = () => {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
      window.location.href="./login";
      };

      var token = localStorage.getItem("DoctorLogintoken");
      var name  = localStorage.getItem("DoctorName");
      const handleLogout =()=>{
        localStorage.removeItem("DoctorLogintoken");
        localStorage.removeItem("DoctorLoginid");
        localStorage.removeItem("DoctorName");
        setOpen(true);
      }
  
  return (
    <>
    <div className='homeheader'>
     <div>
      <span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png"/>&nbsp;&nbsp;<p>WHATSAPP WEB</p></span>
     </div>
     <div className='homecont'>
        <div className='cont'>
            <h1>To use WhatsApp on you computer:</h1>
            <ol>
                <li>Open WhatsApp on your phone</li><br></br>
                <li>Tap <b>Menu</b> or <b>Settings</b> and select <b>Linked devices</b></li><br></br>
                <li>Point your phone to the screen to capture the code</li><br></br>
            </ol>
            <p><Link to="/login">Login</Link> or <Link to="/signup">Signup</Link></p>
            <p className='green'>Need help get started?</p>
        </div>
        <div>
            <img src="https://lookaside.fbsbx.com/elementpath/media/?media_id=1240428922983905&version=1598033359"/>
        </div>
     </div>
    </div>
    </>
  )
}

export default Home
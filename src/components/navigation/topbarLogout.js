import React from 'react'
import FlatButton from 'material-ui/FlatButton';
import { Link } from "react-router-dom";
import { logout } from "../../helpers/auth";

const topbarLogout = (
  <div>
    <Link to="/">
      <FlatButton label="Home" style={{color: '#fff'}} />
    </Link>
    <Link to="/dashboard">
      <FlatButton label="dashboard" style={{color: '#fff'}} />
    </Link>
    <span>
    <FlatButton
      label="Logout"
      onClick={() => {
        logout();
      }}
      style={{color: '#fff'}}
    />
    </span>
  </div>
);

export default topbarLogout

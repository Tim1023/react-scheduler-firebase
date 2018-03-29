import React from 'react'
import FlatButton from 'material-ui/FlatButton';
import { logout } from "../../helpers/auth";

const topbarLogout = (
  <div>
    <FlatButton
      label="Logout"
      onClick={() => {
        logout();
      }}
      style={{ color: '#fff' }}
    />
  </div>
);

export default topbarLogout

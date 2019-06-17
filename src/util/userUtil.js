import React from 'react'
import AuthService from '../service/AuthService';

const authenticated = async () => {
    let authenticated = localStorage.getItem("expensify_session")
    if (authenticated != undefined && authenticated != null) {
      authenticated = await AuthService.isTokenValid({ token: localStorage.getItem("expensify_session") })
      if (authenticated.isTokenValid) {
        authenticated = true;
      } else {
        authenticated = false;
      }
    } else {
      authenticated = false;
    }
    return authenticated;
};

export { authenticated }
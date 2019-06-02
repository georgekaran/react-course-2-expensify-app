import React from 'react'

const isAuthenticated = () => {
    let isAuthenticated =
      localStorage.getItem("expensify_session") != (undefined || null || "undefined")
        ? true
        : false;
    return isAuthenticated;
};

export { isAuthenticated }
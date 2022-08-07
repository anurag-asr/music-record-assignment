import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom';


// 1) Check if the user is authenticate
// 2)If yes, redirect/navigate to the page/components she was trying to access
// else navigate to the Login page
export const ReqAuth = ({children}) => {
  
    const location=useLocation();
  const auth=useSelector((store)=>store.AuthReducer.isAuth)
  
//   console.log(auth)
   if(!auth){
    return <Navigate to="/login" state={{from:location}} replace/>
// whatever this is inside state it can be accessible in login page
// replce value bydefault is true  
}
    return children
}

import React, { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

const PrivateComponent = () => {
    const auth = localStorage.getItem('users'); // Check if user is authenticated
    return auth ? <Outlet /> : <Navigate to="/signup" />; // Redirect to "/signup" if not authenticated
}

export default PrivateComponent;

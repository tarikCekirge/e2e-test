import React from 'react'
import Success from '../components/Success'
import { useLocation, Navigate } from 'react-router-dom';


const SuccessPage = () => {
    const location = useLocation();
    console.log(location)

    if (!location.state?.isAuthenticated) {
        return <Navigate to="" />;
    }
    return (
        <>
            <Success />
        </>
    )
}

export default SuccessPage
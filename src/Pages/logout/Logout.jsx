import React, {useEffect} from 'react'
import useAuthContext from '../../Hooks/UserAuthContext';

const Logout = () => {
    const {logout} = useAuthContext();
    useEffect(()=> logout())
    return null
}

export default Logout

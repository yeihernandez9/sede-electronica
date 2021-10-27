import {useContext} from 'react'
import { AuthContext } from '../Contexts/AuthContext'

export default function useAuthContext(){
    return useContext(AuthContext)
}
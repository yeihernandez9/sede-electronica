import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import '../login/Login.css'
import {signIn} from '../../Redux/authDocks'
import { useHistory} from 'react-router-dom';
import Cookies from 'universal-cookie';
import useAuthContext from '../../Hooks/UserAuthContext';

const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const cookies = new Cookies();
    const {login} = useAuthContext();
    const auth = useSelector(store => store.auths.array)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [dataAuth, setDataAuth] = useState([])
    const [status, setStatus] = useState(false)

    useEffect(() => {
        validateLogin()
    }, [auth])

    const validateLogin = () => {
        if(auth.status === 200){
            setStatus(false)
            //toast.success(auth.message)
            console.log("login")
            cookies.set('data', auth.data,{ path: '/' });
            cookies.set('token', auth.token,{ path: '/' });
            login()
        }
        if(auth.status === 401){
            setStatus(false)
            //toast.error(auth.message)
        }
        if(auth.status === 400){
            setStatus(false)
            //toast.error(auth.message)
        }
        if(auth.status === 404){
            setStatus(false)
            //toast.error(auth.message)
        }
    }

    const sign_in = (e) =>{
        e.preventDefault()
        console.log("guardar")
        const body = {
            "userName": email,
            "password": password
        }

        dispatch(signIn(body))
        setStatus(true)
    }

    return (
        <div class="container-lg">
        	

            <main class="form-signin">
                <form className="formLogin" onSubmit={sign_in}>
                    <div className="contentLogo">
                        <img class="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
                    </div>
                    
                    <h1 class="h3 mb-3 fw-normal text-align">Inicio de sesion</h1>

                    <div class="form-floating">
                    <input 
                        type="text" 
                        class="form-control" 
                        id="floatingInput" 
                        placeholder="name@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}/>
                    <label for="floatingInput">Email o usuario</label>
                    </div>
                    <div class="form-floating">
                    <input 
                        type="password" 
                        class="form-control" 
                        id="floatingPassword" 
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}/>
                    <label for="floatingPassword">
                        Password</label>
                    </div>

                    <div class="checkbox mb-3">
                    
                    </div>
                    <div className="contentButton">
                        <button class="button-custom btn btn-round btn-high" type="submit">Iniciar session</button>
                    </div>
                    
                </form>
            </main>
        
        </div>
    )
}

export default Login

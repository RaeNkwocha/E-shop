import React,{useRef, useState} from 'react'
import {Form,Button,Card, Alert} from "react-bootstrap"
import { Link,useHistory } from 'react-router-dom'
import {useAuth} from "./Authcontext"
// import "bootstrap/dist/css/bootstrap.min.css"

function Login() {
    const emailRef=useRef()
    const passwordRef=useRef()
    const {logIn,currentUser} = useAuth()
    const [error, setError]=useState("")
    const [loading, setLoading]=useState(false)
    const history=useHistory()


   async function handleSubmit(e){
        e.preventDefault()
       
        try{
            setError("")
            setLoading(true)
         await logIn(emailRef.current.value, passwordRef.current.value)
         history.push("/shop")
        } catch{
                setError("failed to sign in")
        }
       setLoading(false)

    }
    return(
    <>
    <Card>
        <Card.Body>
            <h2 classname="text-center mb-4"> Sign up</h2>
            {error&&<Alert variant="danger"> {error} </Alert>}
            <Form onSubmit={handleSubmit}>  
                <Form.Group id="e-mail">
                    <Form.Label> Email </Form.Label>
                    <Form.Control type="e-mail" ref={emailRef} required/>
                </Form.Group>
                <Form.Group id="Password">
                    <Form.Label> password </Form.Label>
                    <Form.Control type="password" ref={passwordRef} required/>
                </Form.Group>
                <Form.Group id="password-confirmed">
                    <button disabled={loading} className="w-100 mt-2" type="submit">Login</button>
                </Form.Group>
            </Form>
        </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">Already Have an account?<Link to="/">sign Up</Link></div>
</>
    )
    
}

export default Login

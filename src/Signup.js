import React,{useRef, useState} from 'react'
import {Form,Button,Card, Alert} from "react-bootstrap"
import { Link,useHistory } from 'react-router-dom'
import {useAuth} from "./Authcontext"
// import "bootstrap/dist/css/bootstrap.min.css"


function Signup() {
    const emailRef=useRef()
    const passwordRef=useRef()
    const passwordConfirmationRef=useRef()
    const {signUp,currentUser} = useAuth()
    const [error, setError]=useState()
    const [loading, setLoading]=useState(false)
    const history=useHistory()

   async function handleSubmit(e){
        e.preventDefault()
        if(passwordRef.current.value !== passwordConfirmationRef.current.value){
            return setError("password does not match")
        }
        try{
            setError("")
            setLoading(true)
         await signUp(emailRef.current.value, passwordRef.current.value)
         history.push("/shop")
        } catch{
                setError("failed to create an Account")
        }
       setLoading(false)

    }
    return (
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
                            <Form.Label> password confirmation </Form.Label>
                            <Form.Control type="password" ref={passwordConfirmationRef} required/>
                            <button disabled={loading} className="w-100 mt-2" type="submit">Sign up</button>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">Already Have an account?<Link to="/login">Log in</Link></div>
        </>
    )
}

export default Signup

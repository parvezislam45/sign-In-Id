import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import useOr from '../../Hook/Hook';

const SignUp = () => {

    const {email,password,user,handleEmail,handlePassword,handleDisplayName,submitButton} =useOr();
    console.log(email,password,user)
    return (
        <div>
            <h1>Sign Up</h1>
            <div className="container">
            <Form className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label >Full Name</Form.Label>
                    <Form.Control onBlur={handleDisplayName} type="text" placeholder="Enter Full Nae" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label >Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button onClick={submitButton} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </div>
            
        </div>
    );
};

export default SignUp;
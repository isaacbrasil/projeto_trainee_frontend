import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
import "./styles.css";

const Login = (props) => {
    return (
        <div id="loginbox" >
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="..." />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="..." />
                </FormGroup>
            </Form>
            <div id="btn-login" >
                <Button color="success">login</Button>{' '}
            </div>
        </div >
        
    );
}
export default Login;
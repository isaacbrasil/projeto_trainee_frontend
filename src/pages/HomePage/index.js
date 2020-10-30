import React from 'react';
import {
    Button, Form, FormGroup, Label, Input, FormText, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import "./styles.css";

const Login = (props) => {
    return (
        <div id="wrap-loginbox" >
            <div id="loginbox" >
                <div id="register" >
                    Autenticação
                    </div >
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="email@email.com" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password" />
                    </FormGroup>
                </Form>
                <div id="btn-login" >
                    <Button color="info" href="/cadastro">login</Button>{''}
                </div>
            </div >

            <div id="cadastrar-button-box">
                
                <div id="cadastrar-button">
                    <a href="">Criar Login</a>
                </div>
            </div>


        </div >



    );
}
export default Login;
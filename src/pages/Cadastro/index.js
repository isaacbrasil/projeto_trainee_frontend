import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./styles.css";
import axios from 'axios';
import db from '../../services/db';

import CameraIcon from '../../images/camera.svg';

function Cadastro() {

    // constructor(){
    //     this.state = {

    //         const dados = {
    //             name: {
    //                 type: String,
    //                 required: true,
    //             },
    //             email: {
    //                 type: String,
    //                 unique: true,
    //                 required:true,
    //                 lowercase:true,
    //             },
    //             password: {
    //                 type: String,
    //                 required: true,
    //                 select: false,
    //             },
    //             passwordResetToken: {
    //                 type: String,
    //                 select: false,
    //             },
    //             passwordResetExpires : {
    //                 type: Date,
    //                 select: false,
    //             },
    //             createdAt: {
    //                 type: Date,
    //                 default: Date.now,
    //             },
    //         }

    //     }
    // }



    // const [dados, setDados] = useState("");

    // useEffect(() => {
    //     axios.post('http://localhost:27017/auth/authenticate', saveDados(req, res) {
    //         const { name, email, password } = req.body; //envia os dados do cliente pro database
    //         res.json({ name, email, password });
    //     });
    // }, []);

    // axios.post('http://localhost:27017/register', { firstName: 'Marlon', lastName: 'Bernardes' })
    // .then(function(response){
    //   console.log('salvo com sucesso')
    // });  
  

        // axios.get("http://localhost:27017")
        //     .then(response => console.log(response)) //caso retorne um sucesso
        //     .catch(error => console.log(error)) //caso ocorra algum erro


        // const [email, setEmail] = useState("");
        // useEffect(() => {
        //     axios.post('http://localhost/auth/register',
        //     { email: 'Marlon'})
        //         .then(function (response) {
        //             console.log(response)
        //         });
        // }, []);

        // useEffect(() => {
        //     api.get('users').then(response => {
        //       setUsers(response.data);
        //     });
        //   }, [users]);
        
        //   async function handleNewUser(e) {
        //     e.preventDefault();
        
        //     const data = {
        //       name: username,
        //     }
        
        //     await api.post('users', data);
        //     alert('Usuário Cadastrado"');
        //   }

        // const [customerSignUp, setCustomerSignUp] = useState(
        //     { exampleName: '', exampleEmail: '', examplePassword: ''}
        // );
    
        // const handleChange = (event) => {
        //     setCustomerSignUp({...customerSignUp, [event.target.name]: event.target.value})
        // }
    
        // const handleSubmit = (e) => {
        //     e.preventDefault()
        //     axios.post('http://localhost/auth/register', customerSignUp)
        //       .then(function (response) {
        //           console.log(response)
        //       })
        //       .catch(function (error) {
        //           console.log(error)
        //       })

        // const response =  db.post("posts", {image, title, content });
    
        return (
        <div id="wrap-registerbox" >

            <div id="registerbox" >
                <div id="register" >
                    Cadastre-se
                </div >

                <div className="image-upload">

                    <label htmlFor="file-input">
                        <div id="img-cam">
                            <img src={CameraIcon} />
                        </div>
                    </label>

                    <input id="file-input" type="file" />

                </div>

                <Form>

                    <FormGroup>
                        <Label for="exampleName">Insira um Nome</Label>
                        <Input type="text" name="name" id="exampleName1" placeholder="Nome" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Insira um Email</Label>
                        <Input type="email" name="email" id="exampleEmail1" placeholder="email@email.com" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Insira uma Senha</Label>
                        <Input type="password" name="password" id="examplePassword1" placeholder="password" />
                    </FormGroup>
                </Form>
                <div id="btn-save" >
                    <Button color="info" >Salvar</Button>{' '}
                </div>
            </div >
        </div >



    );
}

export default Cadastro;
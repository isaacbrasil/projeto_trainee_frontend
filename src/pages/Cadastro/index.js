import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./styles.css";


function Cadastro() {
    return (
        <div id="wrap-registerbox" >

            <div id="registerbox" >
                <div id="register" >
                    Cadastre-se
                </div >

                <div id="imgfile">

                    <div class="image-upload">

                        <label for="file-input">
                            <img src="https://icon-library.net/images/upload-photo-icon/upload-photo-icon-21.jpg" />
                        </label>

                        <input id="file-input" type="file" />
                    </div>
                    
                </div>

                <Form>


                    <FormGroup>
                        <Label for="exampleEmail">Insira um Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="email@email.com" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Insira uma Senha</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password" />
                    </FormGroup>




                </Form>
                <div id="btn-save" >
                    <Button color="info">Salvar</Button>{' '}
                </div>
            </div >
        </div >



    );
}

export default Cadastro;
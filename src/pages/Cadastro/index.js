import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./styles.css";

import CameraIcon from '../../images/camera.svg';

function Cadastro() {
    return (
        <div id="wrap-registerbox" >

            <div id="registerbox" >
                <div id="register" >
                    Cadastre-se
                </div >

                <div className="image-upload">

                    <label for="file-input">
                        <div id="img-cam">
                            <img src={CameraIcon} />
                        </div>
                    </label>

                    <input id="file-input" type="file" />

                </div>

                <Form>
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
                    <Button color="info">Salvar</Button>{' '}
                </div>
            </div >
        </div >



    );
}

export default Cadastro;
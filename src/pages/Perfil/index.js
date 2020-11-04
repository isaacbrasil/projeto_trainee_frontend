import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./styles.css";

import CameraIcon from '../../images/camera.svg';
import Locker from '../../images/padlock.svg';
import BgImage from '../../images/undraw_Group_chat_re_frmo.svg';




function Profile() {
    return (
        <>
            <div id="all">
                <div id="left">
                    <img src={BgImage} alt="" />
                </div>

                <div id="right">
                    <div id="wrap-profilebox" >

                        <div id="profilebox" >
                            <div id="profile" >
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
                                    <Label for="exampleEmail">Email</Label>
                                    <div className="input1">
                                        <Input type="email" name="email" id="exampleEmail1" placeholder="email@cadastrado.com" disabled="disabled" />
                                        <img className="icon-locker" src={Locker} alt="" />
                                    </div>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <div className="input1">
                                        <Input type="password" name="password" id="examplePassword1" placeholder="••••••••" disabled="disabled" />
                                        <img className="icon-locker" src={Locker} alt="" />
                                    </div>
                                </FormGroup>
                            </Form>

                            <div id="btn-save" >
                                <Button color="info">Salvar</Button>{' '}
                            </div>
                        </div >
                    </div >
                </div>
            </div>
        </>

    );
}

export default Profile;
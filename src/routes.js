import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Cadastro from './pages/Cadastro';
import Perfil from './pages/Perfil';
import main from './pages/main';
import HomePage from './pages/HomePage';



function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/cadastro" component={Cadastro}/>
                <Route path="/api" component={main}/>
                <Route path="/perfil" component={Perfil}/>
                
            </Switch>
        </BrowserRouter>
    );


};

export default Routes;
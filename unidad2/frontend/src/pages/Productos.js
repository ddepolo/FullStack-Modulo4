import React from 'react';
import {MuestraBurgers2} from '../components/funciones';

const Productos = (props) => {
    return (
        <div class="container-fluid">

            <div class="row titulos">
                <div class="col">
                    <h2>Productos</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            
            <div class="row row-cols-1 row-cols-md-4 row-cols-xl-5 g-4 m-1">
                <MuestraBurgers2 foto="1" titulo="Burger 1" texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
                <MuestraBurgers2 foto="2" titulo="Burger 2" texto="Lorem Ipsum is simply dummy text of the printing."/>
                <MuestraBurgers2 foto="1" titulo="Burger 3" texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
                <MuestraBurgers2 foto="2" titulo="Burger 4" texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
                <MuestraBurgers2 foto="1" titulo="Burger 5" texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
                <MuestraBurgers2 foto="1" titulo="Burger 6" texto="Lorem Ipsum is simply dummy text of the printing."/>
                <MuestraBurgers2 foto="2" titulo="Burger 7" texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
                <MuestraBurgers2 foto="2" titulo="Burger 8" texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
            </div>

        </div>
    );
}

export default Productos;
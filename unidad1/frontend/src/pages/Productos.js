import React from 'react';

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
            <div class="col">
            <div class="card">
                <img src="./burger2.jpg" class="card-img-top" alt="..."/>
                <div class="card-body cardCust">
                <h5 class="card-title text-center h2">Burger 1</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <a href="#" class="btn btn-warning right">Pedir</a>
                </div>

            </div>
            </div>
            <div class="col">
            <div class="card">
                <img src="./burger2.jpg" class="card-img-top" alt="..."/>
                <div class="card-body cardCust">
                <h5 class="card-title text-center h2">Burger 2</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <a href="#" class="btn btn-warning right">Pedir</a>
                </div>
            </div>
            </div>
            <div class="col">
            <div class="card">
                <img src="./burger2.jpg" class="card-img-top" alt="..."/>
                <div class="card-body cardCust">
                <h5 class="card-title text-center h2">Burger 3</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <a href="#" class="btn btn-warning right">Pedir</a>
                </div>
            </div>
            </div>
            <div class="col">
            <div class="card">
                <img src="./burger2.jpg" class="card-img-top" alt="..."/>
                <div class="card-body cardCust">
                <h5 class="card-title text-center h2">Burger 4</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <a href="#" class="btn btn-warning right">Pedir</a>
                </div>
            </div>
            </div>
            <div class="col">
            <div class="card">
                <img src="./burger2.jpg" class="card-img-top" alt="..."/>
                <div class="card-body cardCust">
                <h5 class="card-title text-center h2">Burger 5</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <a href="#" class="btn btn-warning right">Pedir</a>
                </div>
            </div>
            </div>
            <div class="col">
            <div class="card">
                <img src="./burger2.jpg" class="card-img-top" alt="..."/>
                <div class="card-body cardCust">
                <h5 class="card-title text-center h2">Burger 6</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <a href="#" class="btn btn-warning right">Pedir</a>
                </div>
            </div>
            </div>
            <div class="col">
            <div class="card">
                <img src="./burger2.jpg" class="card-img-top" alt="..."/>
                <div class="card-body cardCust">
                <h5 class="card-title text-center h2">Burger 7</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <a class="btn btn-secondary right">Agotado</a>
                </div>
            </div>
            </div>
            <div class="col">
            <div class="card">
                <img src="./burger2.jpg" class="card-img-top" alt="..."/>
                <div class="card-body cardCust">
                <h5 class="card-title text-center h2">Burger 8</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <a class="btn btn-secondary right">Agotado</a>
                </div>
            </div>
            </div>
        </div>

        </div>
    );
}

export default Productos;
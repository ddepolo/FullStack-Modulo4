import React from 'react';

const Home = (props) => {
    return (
        <div>
            <div className="container-fluid siteSlider">
                <div className="row">
                    <div className="col">
                        <div className="sliderText">Es la tuya <br/>pedila</div>
                    </div>
                    <div className="col">
                    <img src="./burger1.jpg" className="img-fluid" />
                    </div>
                </div>  
                </div>




                
                <div className="row row-cols-1 row-cols-md-3 g-4 m-1">
                <div className="col">
                    <div className="card">
                    <img src="./burger2.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body cardCust">
                        <h5 className="card-title text-center h2">Burger 1</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <img src="./burger2.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body cardCust">
                        <h5 className="card-title text-center h2">Burger 2</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <img src="./burger2.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body cardCust">
                        <h5 className="card-title text-center h2">Burger 3</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
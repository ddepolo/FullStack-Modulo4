import React from 'react';
import MuestraBurgers from '../components/funciones';
import '../styles/home.css';



const Home = (props) => {
    return (
        <div>
            <div className="container-fluid siteSlider">
                <div className="row">
                    <div className="col">
                        <div className="sliderText">Es la tuya <br/>pedila</div>
                    </div>
                    <div className="col">
                    <img src="./fotos/burger1.jpg" className="img-fluid" />
                    </div>
                </div>  
                </div>

                <div className="row row-cols-1 row-cols-md-3 g-4 m-1">
                
                    <MuestraBurgers foto="1" titulo="Burger 1" texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
                    <MuestraBurgers foto="2" titulo="Burger 2" texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
                    <MuestraBurgers foto="1" titulo="Burger 3" texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
                    <MuestraBurgers foto="2" titulo="Burger 4" texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
                    <MuestraBurgers foto="1" titulo="Burger 5" texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
                
                </div>
        </div>
    );
}

export default Home;
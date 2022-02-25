const MuestraBurgers = ({foto, titulo, texto}) => {
    const imagen = './fotos/burger'+foto+'.jpg';
    
    return (
            <div className="col">
                <div className="card">
                    <img src={imagen} className="card-img-top"/>
                    <div className="card-body cardCust">
                        <h5 className="card-title text-center h2">{titulo}</h5>
                        <p className="card-text">{texto}</p>
                    </div>
                    
                </div>
            </div>


    );
}

const MuestraBurgers2 = ({foto, titulo, texto}) => {
    const imagen = './fotos/burger'+foto+'.jpg';
    
    return (
            <div className="col">
                <div className="card">
                    <img src={imagen} className="card-img-top"/>
                    <div className="card-body cardCust">
                        <h5 className="card-title text-center h2">{titulo}</h5>
                        <p className="card-text">{texto}</p>
                    </div>
                    <a href="#" class="btn btn-warning right">Pedir</a>
                </div>
            </div>


    );
}

export {
    MuestraBurgers,
    MuestraBurgers2
};
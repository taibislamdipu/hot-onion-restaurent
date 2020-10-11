import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {

    const { id, name, image, description } = props.menu;

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3" key={id}>

                    <Link to={`/menuItem/${id}`}>
                        <img src={image} className="card-img" alt="..." />
                        <h4>{name}</h4>
                        <p><small>{description}</small></p>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Menu;
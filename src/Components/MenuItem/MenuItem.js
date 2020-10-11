import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const MenuItem = (props) => {

    const { id } = useParams();

    const { name, description, image } = props.fakeData[id];

    console.log(name);

    /* const [menuItems, setMenuItems] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/menuItem/${id}`)
            .then(res => res.json())
            .then(data => setMenuItems(data))
    }, []) */



    return (
        <div>

            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 ">
                        <h1>{name}</h1>
                        <p>{description}</p>
                        <Link to='/placeOrder'>
                            <button className="btn btn-danger text-white">Add</button>
                        </Link>
                    </div>
                    <div className="col-md-6" >
                        <img src={image} alt="" style={{ height: '350px' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
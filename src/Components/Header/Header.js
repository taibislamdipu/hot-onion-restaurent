import React from 'react';
import Navbar from '../Navbar/Navbar';
import homeHeaderBanner from '../../images/homeHeaderBanner.png';

const Header = () => {
    return (
        <div>
            <div style={{ height: '500px' }}>
                <img className="img-fluid" src={homeHeaderBanner} alt="" />
            </div>

        </div>
    );
};

export default Header;
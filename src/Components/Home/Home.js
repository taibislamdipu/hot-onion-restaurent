import React from 'react';
import Header from '../Header/Header';
import fakeData from '../fakeData/fakeData'
import Menu from '../Menu/Menu';

const Home = () => {
    return (
        <div>
            <Header></Header>

            {
                fakeData.map(menu => <Menu menu={menu}></Menu>)
            }

        </div>
    );
};

export default Home;    
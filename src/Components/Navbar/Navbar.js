import React from 'react';

const Navbar = () => {
    return (

        <div className="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">Home</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        {/* <li class="nav-item active">
                            <a class="nav-link mr-5" href="#">Home <span class="sr-only">(current)</span></a>
                        </li> */}
                        <li class="nav-item">
                            {/* <a class="nav-link mr-5" href="#">Features</a> */}
                            <button class="nav-link mr-5 btn">Login</button>
                        </li>
                        <li class="nav-item">
                            {/* <a class="nav-link mr-5" href="#">Pricing</a> */}
                            <button class="nav-link mr-5 btn btn-danger text-white">Sign Up</button>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>

    );
};

export default Navbar;
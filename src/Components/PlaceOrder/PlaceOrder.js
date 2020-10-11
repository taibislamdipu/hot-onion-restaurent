import React from 'react';

const PlaceOrder = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <h1>Edit Delivery Details</h1>

                    <form action="">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Name" />
                    </form>
                </div>

                <div className="col-md-6">
                    <h1>Place Order</h1>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;
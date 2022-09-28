import React from 'react';
import './Product.css';

const Product = (props) => {
    const { product, handleAddToCart } = props;
    const { name, img, seller, price, ratings } = product;
    return (
        <div className="product">
            <div className='product-info'>
                <img src={img}
                    alt=""
                    onError={(e) => {
                        e.currentTarget.src = "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c7fcb9d65c143b4a3c8ad7800ac1820_9366/ultraboost-22-shoes.jpg"
                    }}
                />
                <p className='product-name'>{name}</p>
                <p><small>${price}</small></p>
                <p><small>{seller}</small></p>
                <p><small>{ratings}</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className="btn-crt">Add To Cart</button>

        </div>
    );
};

export default Product;

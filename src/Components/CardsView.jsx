import React from 'react';

function CardsView({name, price, color, img}) {
    return (
        <div className='ShopCard'>
            <h2 className="title">{name}</h2>
            <p className="color">{color}</p>
            <img src={img} alt="Картинка кросовка" className="img"/>
            <div className="bottom">
                <span className="price">${price}</span>
                <button className="buy">ADD TO CART</button>
            </div>
        </div>

    );
}

export default CardsView;

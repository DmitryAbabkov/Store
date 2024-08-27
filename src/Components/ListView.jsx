import React from 'react';

function ListView({name, price, color, img}) {
    return (
        <div className='ShopItem'>
            <img src={img} alt="Картинка кросовка" className="img list"/>
            <h2 className="title">{name}</h2>
            <p className="color">{color}</p>
                <span className="price">${price}</span>
                <button className="buy">ADD TO CART</button>
        </div>
    );
}

export default ListView;

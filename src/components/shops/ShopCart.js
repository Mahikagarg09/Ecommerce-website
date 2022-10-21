import React from "react"

const ShopCart = ({ shopItems, handleClick }) => {
    return (
        <>
            {shopItems.map((item) => {
                return (
                    <div className='box' key={item.id}>
                        <div className='product mtop'>
                            <div className='img'>
                                <span className='discount'>{item.discount}% Off</span>
                                <img src={item.cover} alt='' />
                                <div className='product-like'>
                                    {/* <label>{count}</label> <br /> */}
                                    <i className='fa-regular fa-heart'></i>
                                </div>
                            </div>
                            <div className='product-details'>
                                <h3>{item.name}</h3>
                                <div className='rate'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                </div>
                                <div className='price'>
                                    <h4>${item.price}.00 </h4>
                                    <button  onClick={() => handleClick(item)}>
                                        <i className='fa fa-plus'></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default ShopCart
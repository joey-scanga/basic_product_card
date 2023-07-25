import React, { useState, useRef } from 'react'
import "./App.css";
import white_shirt_img from './white_shirt.jpg';
import black_shirt_img from './black_shirt.jpg';
import red_shirt_img from './red_shirt.jpg';
import blue_shirt_img from './blue_shirt.jpg';


export default function Card( { price, former_price, default_item }) {
    const shirts = {
        white_shirt: {
            img: white_shirt_img,
            title: "White Shirt",
            price: 19.99
        }, 
        black_shirt: {
            img: black_shirt_img,
            title: "Black Shirt",
            price: 21.99
        },
        red_shirt: {
            img: red_shirt_img,
            title: "Red Shirt",
            price: 18.99
        },
        blue_shirt: {
            img: blue_shirt_img,
            title: "Blue Shirt",
            price: 17.99
        },
    };
    const [shirt, setShirt] = useState(shirts.white_shirt);
    const [total, setTotal] = useState(0);
    const [itemNo, setItemNo] = useState(0);
    // const [cartItems, setCartItems] = useState([])
    const sizeRef = useRef()

    function handleShirtChange(e) {
        if (e.target.className === "white") {
            setShirt(shirts.white_shirt)
        } else if (e.target.className === "black") {
            setShirt(shirts.black_shirt)
        } else if (e.target.className === "red") {
            setShirt(shirts.red_shirt)
        } else if (e.target.className === "blue") {
            setShirt(shirts.blue_shirt)
        }
    }

    function handleAddItem() {
        setItemNo(num => {
            return num + 1
        })
    }

    function handleMinusItem() {
        setItemNo(num => {
            if (num > 0) {
                return num - 1
            } else {
                return num
            }
        })
    }

    function handleAddToCart() {
        if (itemNo <= 0) {
            return
        }
        setTotal(prevTotal => {
            return prevTotal + (Math.round(((shirt.price * 0.8) * 100) / 100).toFixed(2) * itemNo)
        })

        setItemNo(0);
    }

    return (
        <div className="card-container">
            <div className="img-container">
                <img className="product-img" src={shirt.img} alt='white-tshirt'></img>
            </div>
            <div className='card-text'>
                <h2>{shirt.title}</h2> 
                <div className='price-row'>
                    <h4 className='slashed-price'><strike>${shirt.price} USD</strike></h4>
                    <h4 className='real-price'>${Math.round(((shirt.price * 0.8) * 100) / 100).toFixed(2)} USD</h4>
                </div>
                <div className='item-no-row'> 
                    <button 
                        className='minus-item'
                        onClick={handleMinusItem}>-</button>
                    <h4 className='num-item'>{itemNo}</h4>
                    <button 
                        className='add-item'
                        onClick={handleAddItem}>+</button>
                </div>
                4

                <div className='color-swatcher'>
                    <h5>Color: </h5>
                    <div 
                        className='white'
                        onMouseEnter={handleShirtChange}></div>
                    <div 
                        className='black'
                        onMouseEnter={handleShirtChange}></div>
                    <div 
                        className='red'
                        onMouseEnter={handleShirtChange}></div>
                    <div 
                        className='blue'
                        onMouseEnter={handleShirtChange}></div>
                </div>

                <div className='size-selector'>
                    <select name='Size' id='Size' ref={sizeRef}>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                    </select>
                </div>

                <div className='add-to-cart'>
                    <button 
                        className='add-to-cart-btn'
                        onClick={handleAddToCart}>Add to cart</button>
                </div>

                <div className='total'>
                    <p>Total: ${total}</p>
                </div>

            </div>
        </div>
    )
}

import { useState } from 'react';
import Card from './card';
import '../index.css'
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { countContext } from "../contexts/countContext";
import { message } from 'antd';


function Wishlist() {
    const {count, setCount} = useContext(countContext);
    
    const [items, setItems] = useState( () => {
        const localStorageValue = localStorage.getItem('wishlist');
        return localStorageValue !== null ? JSON.parse(localStorageValue) : [] 
    });

    // to remove item from wishlist
    const handleClick = (e) => {
        const checkIfExists = items.find( item => item.productid === e.target.id )
        if(checkIfExists === undefined) {
            message.error("Item not found")
        } else {
            const newWishlist = items.filter( item => item.productid !== e.target.id )
            setItems(newWishlist)
            localStorage.setItem("wishlist", JSON.stringify(newWishlist))
            message.success("Item removed successfully")
            setCount(newWishlist.length)
        }
    }
    // const test = {
        
    // }
    return (
        <div>
            <div className='results-outer-container' style={{ zIndex: "0" }}>
                <div className='results-container'>
                    <h1 className='results-header wishlist-header'>- My Wishlist -</h1>
                </div>
            </div>
            <div className='card-outer-container'>
                 {items.length ? items.map( item => <Card key={item.productid} img={item.imageURL} title={item.displayName} subTitle={item.subTitle} price={item.price} salePrice={item.salePrice} id={item.productid} btn="Remove" handleClick={handleClick} /> ) 
                 : <p className='no-results-message'>Nothing here?  <Link to="/" className='start-searching'>Start searching </Link>  </p> }
            </div> 
        </div>
    );
}

export default Wishlist;
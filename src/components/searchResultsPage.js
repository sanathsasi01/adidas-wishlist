import {useLocation} from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Card from './card';
import '../index.css'
import Suggestions from './suggestions';
import { message } from 'antd';
import { useDispatch } from 'react-redux';
import SetCount from '../actions/setItem';
import React from 'react';

// rsf



function ResultPage() {
    const {state} = useLocation();
    const [searchTerm, setSearchTerm] = useState(state)
    const [suggestions, setSuggestions] = useState([]);
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const dispatch = useDispatch()

    const [wishlist, setWishlist] = useState( () => {
        const localStorageValue = localStorage.getItem('wishlist');
        return localStorageValue !== null ? JSON.parse(localStorageValue) : [] 
    });

    // to handle add to cart event
    const handleClick = (e) => {
        const addedItem = data.find( item => item.productid === e.target.id)
        let wishListItems = JSON.parse(localStorage.getItem("wishlist")) !== null ?  JSON.parse(localStorage.getItem("wishlist")) : []
        // check if added already
        const checkIfAlreadyAdded = wishListItems.find( item => item.productid === e.target.id )
        if(checkIfAlreadyAdded === undefined) {
            const newWishlist = [...wishListItems, addedItem]
            setWishlist(newWishlist)
            localStorage.setItem('wishlist', JSON.stringify(newWishlist));
            dispatch(SetCount(newWishlist.length));
            message.success('Item added to wishlist');
        }else {
            message.error('Item already added to wishlist');
        }
    }


    // fetch data for the search text
    useEffect( () => {
        async function fetchData() {
            axios.get(`http://localhost:3000/search/${searchTerm}`)
            .then( (response) => {
                setData(response.data.products)
                setError("")
                setSuggestions(response.data.suggestions)
            })
            .catch( () => {
                setData([])
                setError(`No results found for "${searchTerm}"`)
            })
        }
        fetchData();
    }, [searchTerm])

    return (
        <div>
            <h2 className='results-header'>Showing results for "{searchTerm}"</h2>
            <Suggestions suggestions={suggestions}setSearchTerm={setSearchTerm}/>
                {error && <p className='error-message message'> {error} </p> }
            <div className='card-outer-container'>
                {data.length ? 
                data.map( item => <Card key={item.productid} img={item.imageURL} title={item.displayName} subTitle={item.subTitle} price={item.price} salePrice={item.salePrice} id={item.productid} handleClick={handleClick} btn="add" /> ) 
                : null }
            </div> 
        </div>      
    )
}

export default ResultPage;
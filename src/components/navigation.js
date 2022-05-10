import { useEffect } from "react";
// import { countContext } from "../contexts/countContext";
import '../index.css'
import WishlistIcon from "./wishlistIcon";
import {Link}from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SetCount from '../actions/SetCount';


function Navigation() {
    // const {count} = useContext(countContext);\
    const dispatch = useDispatch()
    const wishList = JSON.parse(localStorage.getItem("wishlist")) ;
    const wishListCount = wishList === null ? 0 : wishList.length
    const count = useSelector(state => state)
    const style = {
        width: "10%",
        margin: "0 1rem",
        minWidth: "100px",
    }

    useEffect( () => {
        dispatch(SetCount(wishListCount))
    } , [] )
    
    return (
        <nav>
            <Link to="/"><img src="https://1000marcas.net/wp-content/uploads/2019/11/Logo-Adidas.png" style={style} alt="icon" /></Link>
            <WishlistIcon count={count} />
        </nav>
    )
}

export default Navigation;
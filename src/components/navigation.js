// import { useContext } from "react";
// import { countContext } from "../contexts/countContext";
import '../index.css'
import WishlistIcon from "./wishlistIcon";
import {Link}from 'react-router-dom';
import { useSelector } from 'react-redux';


function Navigation() {
    // const {count} = useContext(countContext);
    const count = useSelector(state => state)
    console.log(count)
    const style = {
        width: "10%",
        margin: "0 1rem",
        minWidth: "100px",
    }

    
    return (
        <nav>
            <Link to="/"><img src="https://1000marcas.net/wp-content/uploads/2019/11/Logo-Adidas.png" style={style} alt="icon" /></Link>
            <WishlistIcon count={count} />
        </nav>
    )
}

export default Navigation;